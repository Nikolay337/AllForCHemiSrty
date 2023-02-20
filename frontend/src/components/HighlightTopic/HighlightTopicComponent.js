import React from 'react'
import { Image, Button, Grid, Segment } from 'semantic-ui-react'

function HighlightTopicComponent({topic}) {
  return (
   <Grid style={{textAlign: 'center', margin: '2rem'}}>
      <Segment>
        <Image size='massive' src={topic.selectedFile} />
        <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${topic.id}/test`}>Тест</Button>
      </Segment>
    </Grid>
  )
}

export default HighlightTopicComponent