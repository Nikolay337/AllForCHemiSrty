import React from 'react'
import { Image, Segment } from "semantic-ui-react"
import AuthLayout from '../components/layout/AuthLayout'
import image1 from "../assets/images/mendeleeva-tablica.png"

function PeriodicTable() {
  return (
    <AuthLayout>
      <Segment style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={image1} style={{ width: '83rem'}} />
      </Segment>
    </AuthLayout>
  )
}

export default PeriodicTable