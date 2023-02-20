import React from 'react';
import { Button, Segment } from 'semantic-ui-react'

function TopicComponent({ topic, key }) {
  return (
    <div style={{marginLeft:"27%"}}>
      <Segment>
        {/* <iframe src={`${process.env.REACT_APP_BACKEND_URL}/${topic.path}`} /> */}
        <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${key}/test`}>Тест</Button>
      </Segment>
    </div>
  )
}

export default TopicComponent