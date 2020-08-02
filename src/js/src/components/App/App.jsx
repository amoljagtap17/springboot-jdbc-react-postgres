import React, { useState, useEffect } from 'react'
import fetch from 'unfetch'
import { Table, Spin, Modal } from 'antd'
import { Container } from 'components/Layout'
import { Footer } from 'components/Footer'
import { columns } from './tableColumns'

export const App = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

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
          <h1>Hello Modal with Antd</h1>
        </Modal>
        <Footer numberOfStudents={students.length} handleAddClick={openModal} />
      </Container>
    )
  }

  return <h1>No Students found!</h1>
}
