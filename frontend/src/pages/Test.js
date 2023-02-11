import React from 'react'
import AdminTestComponent from '../components/Test/AdminTestComponent'
import AuthLayout from './layout/AuthLayout'

function Test() {
  return (
    <AuthLayout>
      <AdminTestComponent />
    </AuthLayout>
  )
}

export default Test