import React, { useState, useEffect } from 'react'
import { Table, Spin, Modal } from 'antd'
import { getAllStudents } from 'api/student'
import { Container } from 'components/Layout'
import { Footer } from 'components/Footer'
import { AddStudentForm } from 'components/Forms'
import { columns } from './tableColumns'

export const App = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const asyncGetAllStudents = async () => {
      setLoading(true)

      const res = await getAllStudents()
      const students = await res.json()

      setStudents(students)
      setLoading(false)
    }

    asyncGetAllStudents()
  }, [])

  const openModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)

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
        <Modal
          title="Add new Student"
          visible={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          width={1000}
        >
          <AddStudentForm />
        </Modal>
        <Footer numberOfStudents={students.length} handleAddClick={openModal} />
      </Container>
    )
  }

  return <h1>No Students found!</h1>
}
