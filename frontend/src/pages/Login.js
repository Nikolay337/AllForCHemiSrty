import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

function getUser(event) {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log(response.data.user);
        setError('');
      })
      .catch((error) => {
        console.error(error);
        setError('Invalid email or password');
      });
  }

  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column color='purple' computer={4}>
        <Header as='h2' textAlign='center'>
          Влез в профила си
        </Header>
        <Form>
          <Segment size='big'>
            <Form.Input icon='user' iconPosition='left' placeholder='Имейл'
              onChange={(e) => setEmail(e.target.value)} />
            <Form.Input icon='lock' iconPosition='left' placeholder='Парола' type='password'
              onChange={(e) => setPassword(e.target.value)} />
            {error && <Message negative>{error}</Message>}
            <Button type='submit' color='purple' size='big' onClick={getUser}>
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

export default Login;