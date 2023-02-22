import React from 'react'
import Iframe from 'react-iframe'
import { Button, Grid, Segment } from 'semantic-ui-react'

function HighlightTopicComponent({file}) {
  return (
   <Grid style={{textAlign: 'center', margin: '2rem'}}>
      <Segment>
        <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${file.path}`} width="800" height='1000'/>
      </Segment>
      <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${file.topicId}/test`}>Тест</Button>
    </Grid>
  )
}

export default HighlightTopicComponent