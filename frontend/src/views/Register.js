import api from "../api"
import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

function Register() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  function createUser(event) {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage('Моля запълни всички полета');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Моля въведи валиден имейл адрес');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Паролите не съвпадат');
      return;
    }

    const name = `${firstName} ${lastName}`;

    api.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
      name: name,
      email: email,
      password: password
    })
      .then(() => {
        window.location.href = '/';
      })
      .catch(error => {
        setErrorMessage('Има съществуващ акаунт с този имейл.', error);
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
              onChange={(event) => setFirstName(event.target.value)} />
            <Form.Input icon='user' iconPosition='left' placeholder='Фамилия'
              onChange={(event) => setLastName(event.target.value)} />
            <Form.Input icon='user' iconPosition='left' placeholder='Имейл'
              onChange={(event) => setEmail(event.target.value)} />
            <Form.Input icon='lock' iconPosition='left' placeholder='Парола' type='password'
              onChange={(event) => setPassword(event.target.value)} />
            <Form.Input icon='lock' iconPosition='left' placeholder='Потвърди паролата' type='password'
              onChange={(event) => setConfirmPassword(event.target.value)} />
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

export default Register;