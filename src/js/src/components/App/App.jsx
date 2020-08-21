import React, { useState, useEffect } from 'react'
import { Table, Spin, Modal, Empty } from 'antd'
import { getAllStudents } from 'api/student'
import { Container } from 'components/Layout'
import { Footer } from 'components/Footer'
import { AddStudentForm } from 'components/Forms'
import { errorNotification } from 'components/Notification'
import { columns } from './tableColumns'

export const App = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const asyncGetAllStudents = async () => {
    setLoading(true)

    try {
      const res = await getAllStudents()
      const students = await res.json()

      setStudents(students)
    } catch (err) {
      errorNotification(err.error.message, err.error.error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
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

  const commonElements = () => (
    <>
      <Modal
        title="Add new Student"
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
        width={1000}
      >
        <AddStudentForm
          onSuccess={() => {
            closeModal()
            asyncGetAllStudents()
          }}
        />
      </Modal>
      <Footer numberOfStudents={students.length} handleAddClick={openModal} />
    </>
  )

  if (students && students.length) {
    return (
      <Container>
        <Table
          style={{ marginBottom: '100px' }}
          dataSource={students}
          columns={columns}
          pagination={false}
          rowKey="studentId"
        />
        {commonElements()}
      </Container>
    )
  }

  return (
    <Container>
      <Empty description={<h1>No Students found</h1>} />
      {commonElements()}
    </Container>
  )
}
