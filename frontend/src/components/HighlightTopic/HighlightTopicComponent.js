import React, {useState} from 'react'
import { Image, Button, Grid, Input, Segment } from 'semantic-ui-react'

function HighlightTopicComponent(props) {
  return (
   <Grid.Row style={{textAlign: 'center'}}>
      <Segment>
        <Image size='massive' src={props.selectedFile} />
        <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${props.id}/test`}>Тест</Button>
      </Segment>
    </Grid.Row>
  )
}

export default HighlightTopicComponent