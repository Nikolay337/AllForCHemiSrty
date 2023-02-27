import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Segment, Grid, Form, Input, Header } from 'semantic-ui-react'
import TestComponent from './TestComponent';

function AdminTestComponent() {

  const params = useParams();
  const [test, setTest] = useState([]);
  const [topicName, setTopicName] = useState([]);
  const [question, setQuestion] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

// function addQuestion(event) {
//   event.preventDefault();

//   const formData = new FormData();
//   formData.append('file', selectedFile);
//   formData.append('testId', params.id);

//   axios
//     .post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`, formData)
//     .then((response) => {
//       setQuestion(response.data);
//     })
//     .catch((error) => {
//       console.error('Error uploading file', error);
//     });
// }
  
//   function handleFileSelect(event) {
//     setSelectedFile(event.target.files.item(0));
//   }
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}`)
      .then(response => {
        setTopicName(response.data);
      })
      .catch(error => {
        console.error('Error fetching topic name', error);
      });
  }, []);

  function createTest(event) {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`, { name: topicName[0].title })
      .then((response) => {
        setTest([...test, response.data]);
      })
      .catch((error) => {
        console.error('Error uploading file', error);
      });
  }

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`)
        .then(response => {
          setTest(response.data);
        })
        .catch(error => {
          console.error('Error fetching topic name', error);
        });
    }, [params.id]);
  
  return (
    <div>
      <Button onClick={createTest}>Създай тест</Button>
      <Segment textAlign='center'>
        {/* <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} /> */}
        {/* <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={addQuestion}>Добави въпрос</Button> */}
      </Segment>
      <Segment>
        <Header color='purple' size='huge' textAlign='center'>{test[0] ? test[0].name : ""}</Header>
      {/* <Form>
        <Grid centered style={{ marginBottom: '5rem' }}>
        {test.map((question) => (
          <div>
            <TestComponent key={question.id} question={question} />
          </div>
        ))}
        </Grid>  
        <Button style={{margin: '2rem'}} secondary floated='right' size='huge'>Предай</Button> 2
      </Form>  */}
      </Segment>
    </div>
  )
}

export default AdminTestComponent