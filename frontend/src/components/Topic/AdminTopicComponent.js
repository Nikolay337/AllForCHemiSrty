import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import TopicComponent from './TopicComponent';

function AdminTopicComponent(props) {

  const [topics, setTopics] = useState([]);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/files?type=nonhighlighted`)
      .then(response => {
        setTopics(response.data);
      })
  }, [props.path]);

  function handleFileInputChange(event) {
    event.preventDefault();
      
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('file', file);
    formData.append('type', "nonhighlighted");

    sendFormDataToBackend(formData);
  }

  function sendFormDataToBackend(formData) {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/files`, formData)
    .then(response => {
      setFormData([...formData, response.data]);
    })
    .catch(error => {
      console.error('Error uploading file', error);
    });
}

  return (
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
        value={formData.file} onChange={handleFileInputChange} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onChange={sendFormDataToBackend}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {topics.map((topic) => (
              <TopicComponent key={topic.id} topic={topic} />
          ))}
        </Grid>
    </div>
  )
}

export default AdminTopicComponent