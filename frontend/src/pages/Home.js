import React from 'react'
import { Grid, Image} from 'semantic-ui-react'
import AuthLayout from './layout/AuthLayout'
import organicImage from '../assets/image-1.png'
import inorganicImage from '../assets/image-2.png'

function Home() {
  return (
    <AuthLayout>
      <Grid
        textAlign='center'
        style={{ height: '80vh', padding: '5rem' }}
        verticalAlign='middle'
        columns={2}
      >
        <Grid.Column
          style={{
            maxWidth: 450,
            backgroundColor: 'purple',
            height: 500, margin: 100,
            borderRadius: '25px',
          }}
          href='/inorganic-topics'
        >
          <h2>Неорганична химия</h2>
          <Image src={inorganicImage} />
        </Grid.Column>
        <Grid.Column
          style={{
            maxWidth: 450,
            backgroundColor: 'purple',
            height: 500,
            margin: 100,
            borderRadius: '25px'
          }}
          href='/organic-topics'
        >
          <h2>Органична химия</h2>
          <Image src={organicImage}/>
        </Grid.Column>
      </Grid>
    </AuthLayout>
  )
}

export default Home