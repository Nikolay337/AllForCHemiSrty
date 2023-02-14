import React from 'react'
import { Image, Button, Grid, Segment } from 'semantic-ui-react'

function HighlightTopicComponent({topic}) {
  return (
   <Grid.Row style={{textAlign: 'center'}}>
      <Segment>
        <Image size='massive' src={topic.selectedFile} />
        <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${topic.id}/test`}>Тест</Button>
      </Segment>
    </Grid.Row>
  )
}

export default HighlightTopicComponent