import React, { useState, useEffect } from 'react'
import fetch from 'unfetch'

export const App = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const getAllStudents = async () => {
      const res = await fetch('/students')
      const students = await res.json()

      setStudents(students)
    }

    getAllStudents()
  }, [])

  if (students && students.length) {
    return students.map((student) => (
      <div key={student.studentId}>
        <h2>{student.studentId}</h2>
        <p>{student.firstName}</p>
        <p>{student.lastName}</p>
        <p>{student.gender}</p>
        <p>{student.email}</p>
      </div>
    ))
  }

  return <h1>No Students found!</h1>
}
