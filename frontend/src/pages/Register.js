import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const Register = () => (
  <div style={{ backgroundColor: '#fff5ff' }}>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450, backgroundColor: 'purple' }}>
      <Header as='h2' style={{color: 'white'}} textAlign='center'>
        Регистрация
      </Header>
      <Form size='large'>
        <Segment stacked size='large'>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Име'
          />
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Фамилия'
          />
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
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Потвърди Паролата'
            type='password'
          />
          <Button color='purple' fluid size='large' href='login'>
            Регистриране
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
    </Grid>
  </div>
)

export default Register