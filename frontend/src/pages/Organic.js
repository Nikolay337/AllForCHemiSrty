import React from 'react'
import imageAlkeni from '../assets/image-alkeni.png'
import AuthLayout from './layout/AuthLayout'
import {  Card, Image } from 'semantic-ui-react'

function Organic() {
  return (
    <AuthLayout>
      <Card.Group centered>
        <Card href='organic-topics/id'>
          <Card.Header >Алкени</Card.Header>
          <Image src={imageAlkeni} />
        </Card>
      </Card.Group>
    </AuthLayout>
  )
}

export default Organic