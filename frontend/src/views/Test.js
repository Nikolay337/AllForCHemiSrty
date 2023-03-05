import React from 'react'
import TestComponent from '../components/TestComponent'
import AuthLayout from '../components/layout/AuthLayout'

function Test() {
  return (
    <AuthLayout>
      <TestComponent />
    </AuthLayout>
  )
}

export default Test