import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout'
import organicImage from '../assets/images/image-1.png'
import inorganicImage from '../assets/images/image-2.png'

function Home() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function handleArea(area) {
    if (user) {
      navigate(`/${area}`)
    } else {
      alert("Не сте влезнали в акаунта си!")
      navigate("/")
   }
  }

  return (
    <AuthLayout>
      <Card.Group centered style={{height: '60rem', alignItems: 'center'}}>
        <Card style={{width: '35rem', height: '25rem'}} onClick={() => handleArea('inorganic-topics')}>
          <Card.Content textAlign="center">
            <Card.Header>НЕОРГАНИЧНА ХИМИЯ</Card.Header>
            <Image style={{width: '100%', height: '20rem', marginTop: '1rem'}} src={inorganicImage} />
          </Card.Content>
        </Card>
        <Card style={{width: '35rem', height: '25rem'}} onClick={() => handleArea('organic-topics')}>
          <Card.Content textAlign="center">
            <Card.Header>ОРГАНИЧНА ХИМИЯ</Card.Header>
            <Image style={{width: '100%', height: '20rem', marginTop: '1rem'}} src={organicImage} />
          </Card.Content>
        </Card>
      </Card.Group>
    </AuthLayout>
  )
}

export default Home