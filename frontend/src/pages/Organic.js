import React from 'react'
import AuthLayout from '../layout/AuthLayout'
import TopicsComponent from '../components/TopicsComponent'

function Organic() {
  return (
    <AuthLayout>
      <TopicsComponent path="organic-topics"/>
    </AuthLayout>
  )
}

export default Organic