import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Влез в профила си
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Имейл'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Парола'
            type='password'
          />
          <Button
            color='teal'
            fluid size='large'
            href='/'>
            Влизане
          </Button>
        </Segment>
      </Form> 
      <Message>
        Нямаш профил? <a href='register'>Регистрирай се!</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Login