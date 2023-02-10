import React, {useState} from 'react'
import { Card, Image, Form, Segment, Radio } from 'semantic-ui-react'

function TestComponent(props) {
  const [value, setValue] = useState('')

  const handleChange = () => {
    setValue(value = !value)
  }
  
  return (
    <Form style={{ marginBottom: '5rem' }}>
      <Card style={{ width: '70rem', height: '13rem' }}>
        <Image style={{ width: '70rem', height: '13rem' }} src={props.image} />
      </Card>
      <Segment style={{paddingLeft: '2rem', margin: '2rem'}}>
         <Form.Group inline  widths='equal'>
          <Form.Field
            control={Radio}
            label='А'
            value='А'
            checked={value === 'А'}
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label='Б'
            value='Б'
            checked={value === 'Б'}
          />
          <Form.Field
            control={Radio}
            label='В'
            value='В'   
            checked={value === 'В'}
          />
          <Form.Field
            control={Radio}
            label='Г'
            value='Г'
            checked={value === 'Г'}
          />
        </Form.Group>
      </Segment>
    </Form>
  )
}

export default TestComponent