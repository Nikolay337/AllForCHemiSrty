import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450, backgroundColor: 'purple' }}>
      <Header as='h2' style={{color: 'white'}} textAlign='center'>
        Влез в профила си
      </Header>
      <Form size='large'>
        <Segment stacked size='large'>
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
            color='purple'
            fluid size='large'
            href='/'>
            Влизане
          </Button>
        </Segment>
        <Message>
          Нямаш профил? <a href='register'>Регистрирай се!</a>
        </Message>
      </Form>
    </Grid.Column>
  </Grid>
)

export default Login