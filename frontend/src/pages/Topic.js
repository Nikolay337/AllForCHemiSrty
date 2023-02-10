import React from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminTopicsComponent from '../components/AdminTopicsComponent'

function Topic() {
  return (
    <AuthLayout>
      <AdminTopicsComponent />
    </AuthLayout>
  )
}

export default Topic