import React, { useState, useEffect } from 'react'
import fetch from 'unfetch'
import { Table } from 'antd'

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
    const columns = [
      {
        title: 'Student Id',
        dataIndex: 'studentId',
        key: 'studentId'
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName'
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
      }
    ]

    return <Table dataSource={students} columns={columns} rowKey="studentId" />
  }

  return <h1>No Students found!</h1>
}
