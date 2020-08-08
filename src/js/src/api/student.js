import fetch from 'unfetch'

export const getAllStudents = () => fetch('/students')

export const addnewStudent = (student) => {
  fetch('/students', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(student)
  })
}
