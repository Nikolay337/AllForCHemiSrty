import React, {useState} from 'react'
import { Grid, Image, Form, Radio, Segment} from 'semantic-ui-react'

function TestComponent({question}) {

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleChange = (e, { value }) => setSelectedAnswer(value);
  
  return (
    <div style={{ margin: '3rem' }}>
      <Grid.Row centered style={{ width: '70rem', height: '100%' }}  columns='1' >
        <Image style={{ width: '70rem', height: '100%' }} src={question.selectedFile} />
      </Grid.Row>
      <Segment style={{ paddingLeft: '2rem', margin: '2rem' }}>
        <Form.Group inline  widths='equal'>
          <Form.Field>
            <Radio label='А' value='А' checked={selectedAnswer === 'А'} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <Radio label='Б' value='Б' checked={selectedAnswer === 'Б'} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <Radio label='В' value='В' checked={selectedAnswer === 'В'}  onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <Radio label='Г' value='Г' checked={selectedAnswer === 'Г'} onChange={handleChange} />
          </Form.Field>
        </Form.Group>
      </Segment>
    </div>
  )
}

export default TestComponent