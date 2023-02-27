import React from 'react'
import {Grid, Image} from 'semantic-ui-react'

function TestComponent({question}) {
  return (
    <div style={{ margin: '3rem' }}>
      <Grid.Row centered style={{ width: '70rem', height: '100%' }}  columns='1' >
        <Image style={{ width: '70rem', height: '100%' }} src={question.path} />
      </Grid.Row>
    </div>
  )
}

export default TestComponent