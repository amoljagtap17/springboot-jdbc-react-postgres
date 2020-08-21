import React from 'react'
import { Button } from 'antd'
import './Footer.css'
import { Avatar } from 'antd'

export const Footer = ({ numberOfStudents, handleAddClick }) => (
  <div className="footer">
    {numberOfStudents !== undefined ? (
      <Avatar
        size="large"
        style={{ backgroundColor: '#f56a00', marginRight: '5px' }}
      >
        {numberOfStudents}
      </Avatar>
    ) : null}
    <Button type="primary" onClick={handleAddClick}>
      Add new student +
    </Button>
  </div>
)
