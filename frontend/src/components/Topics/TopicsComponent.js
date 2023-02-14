import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function TopicsComponent({topic, path}) {
  
  return (
    <Card href={`${path}/${topic.id}`} style={{ width: '17rem', height: '20rem' }}>
      <Card.Content>
        <Card.Header style={{textAlign: 'center'}}>
          {topic.title}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Image style={{height: '10rem'}} src={topic.selectedFile}/>
      </Card.Content>
    </Card>
  )
}

export default TopicsComponent