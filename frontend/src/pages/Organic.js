import React from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminTopicsComponent from '../components/Topics/AdminTopicsComponent'

function Organic() {
  return (
    <AuthLayout>
      <AdminTopicsComponent path="organic-topics"/>
    </AuthLayout>
  )
}

export default Organic