import React, {useState} from 'react'
import {Button, Grid, Image, Form, Segment} from 'semantic-ui-react'

function TestComponent({ question, onAnswerClick }) {
  const [selectedAnswer, setSelectedAnswer] = useState();

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
    onAnswerClick(question.id, answer);
  };

  return (
    <Form style={{margin: '2rem'}}>
      <Grid.Row centered style={{ width: '70rem', height: '85%' }} columns='1' >
        <Image style={{ width: '70rem', height: '85%' }}
          src={`${process.env.REACT_APP_BACKEND_URL}/${question.path}`}
        />
        <Segment>
          <Button size='big' style={{ marginLeft: '10rem', backgroundColor: selectedAnswer === 'А' ? 'purple' : 'white' }}
            onClick={() => handleAnswerClick('А')}>А</Button>
          <Button size='big' style={{ marginLeft: '10rem', backgroundColor: selectedAnswer === 'Б' ? 'purple' : 'white' }}
            onClick={() => handleAnswerClick('Б')}>Б</Button>
          <Button size='big' style={{ marginLeft: '10rem', backgroundColor: selectedAnswer === 'В' ? 'purple' : 'white' }}
            onClick={() => handleAnswerClick('В')}>В</Button>
          <Button size='big' style={{ marginLeft: '10rem', backgroundColor: selectedAnswer === 'Г' ? 'purple' : 'white' }}
            onClick={() => handleAnswerClick('Г')}>Г</Button>
        </Segment>
      </Grid.Row>
    </Form>
  )
}

export default TestComponent