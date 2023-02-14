import React, {useState} from 'react'
import { Button, Input, Segment, Form, Grid } from 'semantic-ui-react'
import TestComponent from './TestComponent';

function AdminTestComponent() {

  const [questions, setQuestions] = useState([]);
  const [questionId, setQuestiontsId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleCreate = () => {
    setQuestions([...questions, { id: questionId, selectedFile }]);
    setQuestiontsId(questionId + 1);
    setSelectedFile(null);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleSetCorrectOption = (value) => setCorrectAnswer(value);

  return (
    <div>
      <Segment primary textAlign='center'>
        <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
        <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreate}>Добави въпрос</Button>
        <Button content='А' onClick={() => handleSetCorrectOption('А')} />
        <Button content='Б' onClick={() => handleSetCorrectOption('Б')} />
        <Button content='В' onClick={() => handleSetCorrectOption('В')} />
        <Button content='Г' onClick={() => handleSetCorrectOption('Г')} />
      </Segment>
      <Form>
        <Grid centered style={{ marginBottom: '5rem' }}>
        {questions.map((question) => (
          <div key={question.id}>
            <TestComponent question={question} />
          </div>
        ))}
        </Grid>  
        <Button style={{margin: '2rem'}} secondary floated='right' size='huge'>Предай</Button>
      </Form> 
    </div>
  )
}

export default AdminTestComponent