import React, { useState, useEffect } from 'react'
import fetch from 'unfetch'
import { Table, Avatar, Spin } from 'antd'
import { Container } from 'components/Layout'

const columns = [
  {
    title: '',
    key: 'avatar',
    render: (text, student) => (
      <Avatar size="large">
        {`${student.firstName.charAt(0).toUpperCase()}${student.lastName
          .charAt(0)
          .toUpperCase()}`}
      </Avatar>
    )
  },
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

export const App = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAllStudents = async () => {
      setLoading(true)

      const res = await fetch('/students')
      const students = await res.json()

      setStudents(students)
      setLoading(false)
    }

    getAllStudents()
  }, [])

  if (loading) {
    return (
      <Container>
        <Spin size="large" tip="Loading..." />
      </Container>
    )
  }

  if (students && students.length) {
    return (
      <Container>
        <Table
          dataSource={students}
          columns={columns}
          pagination={false}
          rowKey="studentId"
        />
      </Container>
    )
  }

  return <h1>No Students found!</h1>
}
