import React, {useState} from 'react'
import { Button, Input, Segment, Form, Grid } from 'semantic-ui-react'
import TestComponent from './TestComponent';

function AdminTestComponent() {

  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestiontsId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCreateClick = () => {
    setQuestions([...questions, { id: questionId, selectedFile }]);
    setQuestiontsId(questionId + 1);
    setSelectedFile(null);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <Segment primary textAlign='center'>
        <Input style={{ marginLeft: '2rem' }} type="file" onChange={handleFileSelect} />
        <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreateClick}>Създай</Button>
        <Button>А</Button>
        <Button>Б</Button>
        <Button>В</Button>
        <Button>Г</Button>
      </Segment>
      <Form>
        <Grid centered style={{ marginTop: '7rem'}}>
        {questions.map((question) => (
          <div key={question.id}>
            <TestComponent id={question.id} image={question.selectedFile} />
          </div>
        ))}
        </Grid>  
        <Button style={{margin: '2rem'}} secondary floated='right' size='huge'>Предай</Button>
      </Form> 
    </div>
  )
}

export default AdminTestComponent