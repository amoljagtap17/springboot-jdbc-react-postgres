import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Input, Button, Tag } from 'antd'
import { addnewStudent } from 'api/student'
import './AddStudentForm.css'

export const AddStudentForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('First Name required'),
        lastName: Yup.string().required('Last Name required'),
        email: Yup.string()
          .email('Invalid Email Address')
          .required('Email Address is required'),
        gender: Yup.string()
          .oneOf(['male', 'MALE', 'female', 'FEMALE'], 'Gender is incorrect')
          .required('Gender required')
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await addnewStudent(values)

        setSubmitting(false)
      }}
    >
      {({ isSubmitting, submitForm, isValid, touched }) => (
        <Form>
          <Field name="firstName" placeholder="First name" as={Input} />
          <ErrorMessage name="firstName">
            {(msg) => <Tag color="#f50">{msg}</Tag>}
          </ErrorMessage>

          <Field name="lastName" placeholder="Last name" as={Input} />
          <ErrorMessage name="lastName">
            {(msg) => <Tag color="#f50">{msg}</Tag>}
          </ErrorMessage>

          <Field type="email" name="email" placeholder="Email" as={Input} />
          <ErrorMessage name="email">
            {(msg) => <Tag color="#f50">{msg}</Tag>}
          </ErrorMessage>

          <Field name="gender" placeholder="Gender" as={Input} />
          <ErrorMessage name="gender">
            {(msg) => <Tag color="#f50">{msg}</Tag>}
          </ErrorMessage>

          <br />

          <Button
            onClick={() => submitForm()}
            disabled={isSubmitting || (touched && !isValid)}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
