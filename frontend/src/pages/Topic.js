import React from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminTopicComponent from '../components/Topic/AdminTopicComponent'

function Topic() {
  return (
    <AuthLayout>
      <AdminTopicComponent />
    </AuthLayout>
  )
}

export default Topic