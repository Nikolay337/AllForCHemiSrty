import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Button, Segment } from 'semantic-ui-react'
// import TestComponent from './TestComponent';

function AdminTestComponent() {

  const params = useParams()
  const [test, setTest] = useState([]);
  const [topicName, setTopicName] = useState("");
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
  
// useEffect(() => {
//     axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}`)
//       .then(response => {
//         setTopicName(response.data.title);
//       })
//       .catch(error => {
//         console.error('Error fetching topic name', error);
//       });
//   }, [params.id]);

function createTest(event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append('name', "Алкини");
  formData.append('topicId', params.id);

  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`, formData)
    .then((response) => {
      const newTest = response.data;
      setTest(newTest);
    })
    .catch((error) => {
      console.error('Error uploading file', error);
    });
  console.log(params.id);
}

  // function handleFileSelect(event) {
  //   setSelectedFile(event.target.files.item(0));
  // }

  return (
    <div>
      <Segment textAlign='center'>
        <Button onClick={createTest}>Създай Тест</Button>
        {/* <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} /> */}
        {/* <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={addQuestion}>Добави въпрос</Button> */}
        {/* <Button content='А' value={"А"} onClick={(event) => setCorrectAnswer(event.target.value)}/>
        <Button content='Б' value={"Б"} onClick={(event) => setCorrectAnswer(event.target.value)}/>
        <Button content='В' value={"В"} onClick={(event) => setCorrectAnswer(event.target.value)}/>
        <Button content='Г' value={"Г"} onClick={(event) => setCorrectAnswer(event.target.value)}/> */}
      </Segment>
      <Segment>{topicName}</Segment>
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