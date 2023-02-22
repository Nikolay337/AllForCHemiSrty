import React from 'react'
import Iframe from 'react-iframe'
import { Button, Grid, Segment } from 'semantic-ui-react'

function HighlightTopicComponent({topic}) {
  return (
   <Grid style={{textAlign: 'center', margin: '2rem'}}>
      <Segment>
        <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${topic.path}`} width="800" height='1000'/>
      </Segment>
      <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${topic.id}/test`}>Тест</Button>
    </Grid>
  )
}

export default HighlightTopicComponent