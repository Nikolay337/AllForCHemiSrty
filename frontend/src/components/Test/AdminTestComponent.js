import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Segment, Grid, Input, Header } from 'semantic-ui-react'
import TestComponent from './TestComponent';

function AdminTestComponent() {

  const params = useParams();
  const [test, setTest] = useState([]);
  const [topicName, setTopicName] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  
  function createTest(event) {
    event.preventDefault();

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`, {name: topicName[0].title})
      .then((response) => {
        setTest([...test, response.data]);
      })
      .catch((error) => {
        console.error('Error creating test', error);
      });
  }

  function addQuestion(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`, formData)
      .then((response) => {
        setQuestions([...questions, response.data]);
      })
      .catch((error) => {
        console.error('Error uploading file', error);
      });
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files.item(0));
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}`)
      .then(response => {
        setTopicName(response.data);
      })
      .catch(error => {
        console.error('Error fetching topic name', error);
      });
  }, [params.id]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`)
      .then(response => {
        setTest(response.data);
      })
      .catch(error => {
        console.error('Error fetching test', error);
      });
  }, [params.id]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions', error);
      });
  }, [params.id]);
  
  return (
    <div>
      {test[0] ?
        <div>
          <Segment textAlign='center'>
            <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
              onChange={handleFileSelect} />
            <Button primary size='big' style={{ marginLeft: '2rem' }}
              onClick={addQuestion}>Добави въпрос</Button>
          </Segment>
          <Segment>
          <Header color='purple' size='huge' textAlign='center'>{test[0] && test[0].name }</Header>
            <Grid centered style={{ marginBottom: '5rem' }}>
              {questions.map((question) => (
                <TestComponent key={question.id} question={question} />
              ))}
            </Grid>  
            <Button secondary size='massive' style={{margin: '5rem'}} floated='right'>Предай</Button>
          </Segment>
        </div>
      :
        <Button primary size='massive' style={{ marginLeft: '60rem', marginTop: '23rem' }}
          onClick={createTest}>Създай тест</Button>
      }
    </div>
  )
}

export default AdminTestComponent