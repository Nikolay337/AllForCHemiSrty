import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react'
// import TestComponent from './TestComponent';

function AdminTestComponent() {

  // const [test, setTest] = useState([]);
  // const [topicName, setTopicName] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);

// function addQuestion(event) {
//   event.preventDefault();

//   const formData = new FormData();
//   formData.append('file', selectedFile);
//   formData.append('testId', params.id);

//   axios
//     .post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`, formData)
//     .then((response) => {
//       const newQuestion = response.data;
//       newQuestion.correctAnswer = correctAnswer;
//       setQuestion([...question, newQuestion]);
//     })
//     .catch((error) => {
//       console.error('Error uploading file', error);
//     });
// }
  
  // function handleFileSelect(event) {
  //   setSelectedFile(event.target.files.item(0));
  // }

  const params = useParams();
  const [test, setTest] = useState([]);
  const [topicName, setTopicName] = useState("");

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

    const formData = new FormData();
    formData.append('name', topicName[0].title);
    // formData.append('topicId', params.id);

  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`, { name: topicName[0].title })
    .then((response) => {
      setTest = response.data;
    })
    .catch((error) => {
      console.error('Error uploading file', error);
    });
    console.log(params.id);
    console.log(topicName[0].title);
}

  return (
    <div>
      <Segment textAlign='center'>
        {/* <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} /> */}
        {/* <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={addQuestion}>Добави въпрос</Button> */}
      </Segment>
      <Button onClick={createTest}>Създай тест</Button>
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
    </div>
  )
}

export default AdminTestComponent