import React, {useState} from 'react'
import { Grid, Image, Form, Segment, Radio} from 'semantic-ui-react'

function TestComponent(props) {
  const [selectedAnswer, setSelectedAsnwer] = useState('');

  const handleChange = (e, { value }) => setSelectedAsnwer(value);
  
  return (
    <Form style={{ marginBottom: '5rem' }}>
      <Grid.Row style={{ width: '70rem', height: '100%' }} columns='1'>
        <Image style={{ width: '70rem', height: '100%' }} src={props.image} />
      </Grid.Row>
      <Segment style={{ paddingLeft: '2rem', margin: '2rem' }}>
        <Form.Group inline  widths='equal'>
          <Form.Field>
            <Radio
              label='А'
              value='А'
              checked={selectedAnswer === 'А'}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Б'
              value='Б'
              checked={selectedAnswer === 'Б'}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='В'
              value='В'
              checked={selectedAnswer === 'В'}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Г'
              value='Г'
              checked={selectedAnswer === 'Г'}
              onChange={handleChange}
            />
            </Form.Field>
        </Form.Group>
        {selectedAnswer && (
          <Form.Field>
            {selectedAnswer === props.correctAnswer ? (
              <span style={{ color: 'green' }}>Correct!</span>
            ) : (
              <span style={{ color: 'red' }}>Incorrect.</span>
            )}
          </Form.Field>
        )}
      </Segment>
    </Form>
  )
}

export default TestComponent