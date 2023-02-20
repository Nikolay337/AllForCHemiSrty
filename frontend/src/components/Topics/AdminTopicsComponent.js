import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Input, Segment, Grid } from 'semantic-ui-react'
import TopicsComponent from './TopicsComponent';

function AdminTopicsComponent(props) {

  const [title, setTitle] = useState("")
  const [topics, setTopics] = useState([])
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4002/topics?area=${props.path}`)
      .then(response => {
        setTopics(response.data);
      })
  }, [props.path]);

  function handleFileInputChange(event, title) {
    event.preventDefault();
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('title', title);
    formData.append('file', file);
    formData.append('area', props.path);

    sendFormDataToBackend(formData);
  }

  function sendFormDataToBackend(formData) {
  axios.post("http://localhost:4002/topics", formData)
    .then(response => {
      setFormData([...formData, response.data]);
    })
    .catch(error => {
      console.error('Error uploading file', error);
    });
}

  return (
    <div>
      <Segment textAlign='center'>
        <Input style={{ height: '3.2rem' }} size='big' type="text" placeholder="Заглавие на темата"
           onChange={(event) => setTitle(event.target.value)} />
        <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
          value={formData.file} onChange={handleFileInputChange} />
        <Button size='big' primary style={{ marginLeft: '2rem' }} onChange={sendFormDataToBackend}>Създай</Button>
      </Segment>
      <Grid centered style={{ margin: '5rem'}}>
        {topics.map((topic) => (
          <TopicsComponent key={topic.id} data={topic} />
        ))}
      </Grid>
    </div>
  )
}

export default AdminTopicsComponent