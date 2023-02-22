import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Input, Segment, Grid } from 'semantic-ui-react';
import TopicsComponent from './TopicsComponent';

function AdminTopicsComponent(props) {
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics?area=${props.path}`)
      .then(response => {
        setTopics(response.data);
      })
      .catch(error => {
        console.error('Error fetching topics', error);
      });
  }, [props.path]);

  function createTopic(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', selectedFile);
    formData.append('area', props.path);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/topics`, formData)
      .then(response => {
        setTopics([...topics, response.data]);
      })
      .catch(error => {
        console.error('Error creating topic', error);
      });
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files.item(0));
  }

  return (
    <div>
      <Segment textAlign='center'>
        <Input style={{ height: '3.2rem' }} size='big' type="text" placeholder="Заглавие на темата"
          onChange={(event) => setTitle(event.target.value)} />
        <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
          onChange={handleFileSelect} />
        <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={createTopic}>Създай</Button>
      </Segment>
      <Grid centered style={{ margin: '5rem'}}>
        {topics.map((topic) => (
          <TopicsComponent key={topic.id} data={topic} />
        ))}
      </Grid>
    </div>
  );
}

export default AdminTopicsComponent;