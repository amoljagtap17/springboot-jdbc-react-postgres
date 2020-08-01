import React, { useEffect } from 'react'
import { getAllStudents } from 'api/students'

export const App = () => {
  useEffect(() => {
    getAllStudents()
      .then((res) => res.json())
      .then((students) => {
        console.log('students', students)
      })
  }, [])

  return <div>App</div>
}
