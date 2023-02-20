import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function TopicsComponent({ data }) {
  console.log(data.path);
  return (
    <Card href={`${data.area}/${data.id}`} style={{ width: '17rem', height: '20rem', margin: '2rem' }}>
      <Card.Content>
        <Card.Header style={{textAlign: 'center'}}>
          {data.title}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Image style={{ height: '10rem' }} src={data.path} />
      </Card.Content>
    </Card>
  )
}

export default TopicsComponent