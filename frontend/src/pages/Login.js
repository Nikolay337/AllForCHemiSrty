import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Login = () => (
  <div color='fff5ff'>
    <Grid
      textAlign='center'
      style={{ height: '100vh' }}
      verticalAlign='middle'
    >
      <Grid.Column
        color='purple'
        computer={4}
      >
        <Header
          as='h2'
          color='white'
          textAlign='center'
        >
          Влез в профила си
        </Header>
        <Form>
          <Segment size='big'>
            <Form.Input
              icon='user'
              iconPosition='left'
              placeholder='Имейл'
            />
            <Form.Input
              icon='lock'
              iconPosition='left'
              placeholder='Парола'
              type='password'
            />
            <Button
              type='submit'
              color='purple'
              size='big'
              href='/'
            >
              Влизане
            </Button>
          </Segment>
          <Message size='big'>
            Нямаш профил? <a href='/register'>Регистрирай се!</a>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)

export default Login