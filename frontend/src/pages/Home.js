import React from 'react'
import Image2 from '../assets/image-1.png'
import { Grid, Button, Image } from 'semantic-ui-react'
import AuthLayout from './layout/AuthLayout'

function Home() {
  return (
    <AuthLayout>
      <Grid
        textAlign='center'
        style={{ height: '80vh', padding: '5rem' }}
        verticalAlign='middle'
        columns={2}
      >
        <Grid.Column style={{ maxWidth: 450, backgroundColor: 'purple', height: 500, margin: 100 }} >
          <Button>Неорганична химия</Button>
          <Image src={Image1} />
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 450, backgroundColor: 'purple', height: 500 }}>
          <Button>Органична химия</Button>
          <Image src={Image2}/>
        </Grid.Column>
      </Grid>
    </AuthLayout>
  )
}

export default Home