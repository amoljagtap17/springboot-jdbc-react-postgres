import fetch from 'unfetch'

const checkStatus = (response) => {
  if (response.ok) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response

    response.json().then((err) => {
      error.error = err
    })

    return Promise.reject(error)
  }
}

export const getAllStudents = () => fetch('/students').then(checkStatus)

export const addnewStudent = (student) => {
  fetch('/students', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(student)
  }).then(checkStatus)
}
