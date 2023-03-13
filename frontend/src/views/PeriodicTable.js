import React from 'react'
import { Image, Segment } from "semantic-ui-react"
import AuthLayout from '../components/layout/AuthLayout'
import tablica from "../assets/images/mendeleeva-tablica.png"

function PeriodicTable() {
  return (
    <AuthLayout>
      <Segment style={{ display: 'flex', justifyContent: 'center' }}>
        <Image style={{ width: '80rem'}} src={tablica} />
      </Segment>
    </AuthLayout>
  )
}

export default PeriodicTable