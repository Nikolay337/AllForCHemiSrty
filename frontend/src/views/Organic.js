import React from 'react'
import AuthLayout from '../components/layout/AuthLayout'
import TopicsComponent from '../components/TopicsComponent'

function Organic() {
  return (
    <AuthLayout>
      <TopicsComponent path="organic-topics" />
    </AuthLayout>
  )
}

export default Organic