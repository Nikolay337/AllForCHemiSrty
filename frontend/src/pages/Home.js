import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import AuthLayout from './layout/AuthLayout'
import organicImage from '../assets/images/image-1.png'
import inorganicImage from '../assets/images/image-2.png'

function Home() {
  return (
    <AuthLayout>
        <Card.Group
        centered
        style={{
          width: '100%',
          height: '60rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card href='/inorganic-topics' style={{width: '30rem', height: '20rem'}}>
          <Card.Content>
            <Card.Header 
              style={{
                textAlign: 'center'
              }}
            >
              НЕОРГАНИЧНА ХИМИЯ
            </Card.Header>
          </Card.Content>
          <Image style={{width: '100rem', height: '17rem'}} src={inorganicImage} />
        </Card>

        <Card href='/organic-topics' style={{width: '30rem', height: '20rem', marginLeft: '3rem'}}>
          <Card.Content>
            <Card.Header
              style={{
                textAlign: 'center'
              }}
            >
              ОРГАНИЧНА ХИМИЯ
            </Card.Header>
          </Card.Content>
          <Image  style={{width: '100rem', height: '17rem'}} src={organicImage} />
        </Card>
      </Card.Group>
    </AuthLayout>
  )
}

export default Home