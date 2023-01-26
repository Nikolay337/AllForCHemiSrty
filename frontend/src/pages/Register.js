import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const Register = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Регистрация
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Име' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Фамилия' />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Имейл Адрес' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Парола'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Потвърди Паролата'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Регистриране
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)

export default Register