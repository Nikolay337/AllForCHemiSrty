import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function TopicsComponent(props) {
  return (
    <Card href={`organic-topics/${props.id}`} style={{ width: '17rem', height: '20rem', }}>
      <Card.Content>
        <Card.Header style={{textAlign: 'center'}}>
          {props.title}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Image style={{height: '10rem'}} src={props.image}/>
      </Card.Content>
    </Card>
  )
}

export default TopicsComponent