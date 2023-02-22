import React from 'react';
import Iframe from 'react-iframe'
import { Button, Segment } from 'semantic-ui-react'

function TopicComponent({ topic, key }) {
  return (
    <div>
      <Segment>
        <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${topic.path}`} width="800" height='1000'/>
      </Segment>
      <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`test`}>Тест</Button>
    </div>
  )
}

export default TopicComponent