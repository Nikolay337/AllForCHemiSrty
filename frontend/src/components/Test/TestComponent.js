import React from 'react'
import { Button, Grid, Image, Segment} from 'semantic-ui-react'

function TestComponent({question}) {
  return (
    <div style={{ margin: '3rem' }}>
      <Grid.Row centered style={{ width: '70rem', height: '100%' }}  columns='1' >
        <Image style={{ width: '70rem', height: '100%' }} src={question.path} />
      </Grid.Row>
      <Segment style={{ paddingLeft: '2rem', margin: '2rem' }}>
        <Button>А</Button>
        <Button>Б</Button>
        <Button>В</Button>
        <Button>Г</Button>
      </Segment>
    </div>
  )
}

export default TestComponent