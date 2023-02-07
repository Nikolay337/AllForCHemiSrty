import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import AuthLayout from './layout/AuthLayout'
import organicImage from '../assets/image-1.png'
import inorganicImage from '../assets/image-2.png'

function Home() {
  return (
    <AuthLayout>
      <Card.Group
        centered
        textAlign='center'
      >
        <Card
            href='/inorganic-topics'
          >
            <Card.Content>
              <Card.Header>НЕОРГАНИЧНА ХИМИЯ</Card.Header>
            </Card.Content>
            <Image src={inorganicImage} />
          </Card>

          <Card
            href='/organic-topics'
          >
            <Card.Content>
              <Card.Header>ОРГАНИЧНА ХИМИЯ</Card.Header>
            </Card.Content>
            <Image src={organicImage} />
          </Card>
        </Card.Group>
      {/* <Grid
        textAlign='center'
        verticalAlign='middle'
        floated='left'
        columns={2}
      >
         <Grid.Column
          style={{
            borderRadius: '25px'
          }}
          color='purple'
          computer={5}
          href='/inorganic-topics'
        >
          <h2>НЕОРГАНИЧНА ХИМИЯ</h2>
          <Image
            rounded
            width='500px'
            height='290px'
            src={inorganicImage}
          />
        </Grid.Column> 

         <Grid.Column
          style={{
            borderRadius: '25px'
          }}
          color='purple'
          computer={5}
          href='/organic-topics'
        >
          <h2>ОРГАНИЧНА ХИМИЯ</h2>
          <Image
            rounded
            width='500px'
            height='290px'
            src={organicImage} />
        </Grid.Column> 
      </Grid> */}
    </AuthLayout>
  )
}

export default Home