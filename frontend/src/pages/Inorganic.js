import React from 'react'
import AuthLayout from './layout/AuthLayout'
import imageAlkeni from '../assets/images/image-alkeni.png'
import imageAlkani from '../assets/images/image-alkani.png'
import { Card, Image } from 'semantic-ui-react'

function Inorganic() {
  return (
    <AuthLayout>
      <Card.Group centered style={{marginTop: '7rem'}}>
        <Card href='inorganic-topics/1'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Строеж на атома
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/2'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Периодична система
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkeni} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/3'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Химична връзка
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/4'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Химични елементи
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/5'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Термохимия
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/6'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Електролиза
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/7'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Скорост на химичните реакции
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/8'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Катализа
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/9'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Химично равновесие
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/10'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Разтвори на електролити
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/11'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Истински разтвори
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='inorganic-topics/11'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Колоиди
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
      </Card.Group>
    </AuthLayout>
  )
}

export default Inorganic