import React, {useRef} from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function Login() {

  const nameRef = useRef()
  const passwordRef = useRef()

  function onSubmit(e) {
    e.preventDefault()
    console.log({
      name: nameRef.current.value,
      password: passwordRef.current.value
    })
  }

  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column color='purple' computer={4}>
        <Header as='h2' color='white' textAlign='center'>
          Влез в профила си
        </Header>
        <Form onSubmit={onSubmit}>
          <Segment size='big'>
            <Form.Input ref={nameRef} icon='user' iconPosition='left' placeholder='Име' />
            <Form.Input ref={passwordRef} icon='lock' iconPosition='left' placeholder='Парола' type='password' />
            <Button type='submit' color='purple' size='big'>
              Влизане
            </Button>
          </Segment>
          <Message size='big'>
            Нямаш профил? <a href='/register'>Регистрирай се!</a>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Login