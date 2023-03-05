
import api from "../api"
import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  function createUser(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // api.get(`${process.env.REACT_APP_BACKEND_URL}/user`)
    //   .then(response => {
    //     if (response.data.user) {
    //       setErrorMessage('Email address already registered');
    //       return;
    //     }

        api.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
          name: name,
          email: email,
          password: password
        })
          .then(() => {
            window.location.href = '/';
          })
          .catch((error) => {
            console.error(error);
          });
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  }
  
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column color='purple' computer={4}>
        <Header as='h2' textAlign='center'>
          Регистрация
        </Header>
        <Form>
          <Segment size='big'>
            <Form.Input icon='user' iconPosition='left' placeholder='Име и Фамилия'
              onChange={(event) => setName(event.target.value)} />
            <Form.Input icon='user' iconPosition='left' placeholder='Имейл'
              onChange={(event) => setEmail(event.target.value)} />
            <Form.Input icon='lock' iconPosition='left' placeholder='Парола' type='password'
              onChange={(event) => setPassword(event.target.value)} />
            {errorMessage &&
              <p style={{ color: 'red' }}>{errorMessage}</p>
            }
            <Button type='submit' color='purple' size='big' onClick={createUser}>
              Регистриране
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Register