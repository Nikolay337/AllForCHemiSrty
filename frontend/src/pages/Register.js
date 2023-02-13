import React, {useRef} from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

function Register() {

  const nameRef = useRef()
  const passwordRef = useRef()

  function onSubmit(e) {
    e.preventDefault()
    console.log({
      name: nameRef.current.value,
      password: passwordRef.current.value,
    })
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column color='purple' computer={4}>
        <Header as='h2' color='black' textAlign='center'>
          Регистрация
        </Header>
      <Form onSubmit={onSubmit}>
        <Segment size='big'>
          <Form.Input icon='user' iconPosition='left' placeholder='Име' />
          <Form.Input icon='user' iconPosition='left' placeholder='Фамилия' />
          <Form.Input icon='lock' iconPosition='left' placeholder='Парола' type='password' />
          <Form.Input icon='lock' iconPosition='left' placeholder='Потвърди Паролата' type='password' />
          <Button type='submit' color='purple' size='big'>
            Регистриране
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}

export default Register