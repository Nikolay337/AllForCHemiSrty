import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function createUser(event) {
    event.preventDefault();

    axios.post('http://localhost:4002/users', {
      name: name,
      email: email,
      password: password
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column color='purple' computer={4}>
        <Header as='h2' textAlign='center'>
          Регистрация
        </Header>
      <Form>
        <Segment size='big'>
            <Form.Input icon='user' iconPosition='left' placeholder='Име'
              onChange={(e) => setName(e.target.value)} />
            <Form.Input icon='user' iconPosition='left' placeholder='Имейл'
              onChange={(e) => setEmail(e.target.value)} />
            <Form.Input icon='lock' iconPosition='left' placeholder='Парола' type='password'
              onChange={(e) => setPassword(e.target.value)} />
          <Button type='submit' color='purple' size='big' href="/login" onClick={createUser}>
            Регистриране
          </Button>
        </Segment>
      </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Register