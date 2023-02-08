import React from 'react'
import imageAlkeni from '../assets/images/image-alkeni.png'
import imageAlkani from '../assets/images/image-alkani.png'
import AuthLayout from './layout/AuthLayout'
import { Card, Image } from 'semantic-ui-react'

function Organic() {
  return (
    <AuthLayout>
      <Card.Group centered style={{marginTop: '7rem'}}>
        <Card href='organic-topics/1'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Алкани
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/2'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Алкени
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkeni} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/3'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Алкини
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/4'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Арени
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/5'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Халогенопроизводни на въглеводородите
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/6'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Хидроксилни производни на въглеводородите
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/7'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Амини
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/8'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Алдехиди и кетони
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/9'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Карбоксилни киселини
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/10'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Аминокарбоксилни киселини
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Image src={imageAlkani} />
          </Card.Content>
        </Card>
        <Card href='organic-topics/11'>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center'}}>
              Въглехидрати
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

export default Organic