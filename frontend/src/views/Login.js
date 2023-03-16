import api from "../api"
import jwtDecode from 'jwt-decode'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react'

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function Login(event) {
    event.preventDefault();

    api.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      email: email,
      password: password
    })
    .then((response) => {
      const token = response.data.token;
      const tokenDecoded = jwtDecode(response.data.token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(tokenDecoded));
      navigate("/home")
    })
      .catch(() => {
        setError('Невалиден имейл или парола');
    });
  }

  return(
    <Grid textAlign='center' verticalAlign='middle' style={{height: '100vh'}}>
      <Grid.Column computer={4} style={{backgroundColor: 'indigo'}}>
        <Header as='h2' textAlign='center' style={{color: 'white'}}>
          Влез в профила си
        </Header>
        <Form>
          <Segment size='big'>
            <Form.Input icon='user' iconPosition='left' placeholder='Имейл'
              onChange={(e) => setEmail(e.target.value)} />
            <Form.Input icon='lock' iconPosition='left' placeholder='Парола' type='password'
              onChange={(e) => setPassword(e.target.value)} />
            {error && <Message negative>{error}</Message>}
            <Button type='submit' size='big' style={{backgroundColor: 'indigo', color: 'white'}}
              onClick={Login}>Влизане
            </Button>
          </Segment>
          <Message size='big' style={{textAlign: 'center', marginTop: '30px'}}>
            Нямаш профил?{' '}
            <Button onClick={() => navigate('/register')} color='teal' size='big' style={{marginLeft: '10px'}}>
              Регистрирай се <Icon name='arrow right' />
            </Button>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Login;