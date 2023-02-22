import React from 'react';
import Iframe from 'react-iframe'
import { Button, Segment } from 'semantic-ui-react'

function TopicComponent({file}) {
  return (
    <div>
      <Segment>
        <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${file.path}`} width="800" height='1000'/>
      </Segment>
      <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${file.topicId}/test`}>Тест</Button>
    </div>
  )
}

export default TopicComponent