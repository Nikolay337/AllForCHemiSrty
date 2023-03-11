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
      <div src={organicImage}>
      <Card.Group centered style={{ width: '100%', height: '60rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Card style={{width: '30rem', height: '20rem'}} onClick={() => {handleArea('inorganic-topics')}}>
          <Card.Content>
            <Card.Header style={{textAlign: 'center'}}>
              НЕОРГАНИЧНА ХИМИЯ
            </Card.Header>
          </Card.Content>
          <Image style={{width: '100rem',height: '17rem'}} src={inorganicImage} />
        </Card>
        <Card style={{width: '30rem', height: '20rem', marginLeft: '3rem'}} onClick={() => {handleArea('organic-topics')}}>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center' }}>
              ОРГАНИЧНА ХИМИЯ
            </Card.Header>
          </Card.Content>
          <Image style={{ width: '100rem', height: '17rem' }} src={organicImage} />
        </Card>
        </Card.Group>
      </div>
    </AuthLayout>
  )
}

export default Home