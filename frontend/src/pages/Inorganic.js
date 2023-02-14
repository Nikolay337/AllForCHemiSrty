import React from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminTopicsComponent from '../components/Topics/AdminTopicsComponent'

function Inorganic() {
  return (
    <AuthLayout>
      <AdminTopicsComponent path="inorganic-topics" />
   </AuthLayout>
  )
}

export default Inorganic