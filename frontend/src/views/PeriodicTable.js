import React from 'react'
import { Image, Segment } from "semantic-ui-react"
import AuthLayout from '../components/layout/AuthLayout'
import tablica from "../assets/images/mendeleeva-tablica.png"

function PeriodicTable() {
  return (
    <AuthLayout>
      <Segment style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={tablica} style={{ width: '83rem'}} />
      </Segment>
    </AuthLayout>
  )
}

export default PeriodicTable