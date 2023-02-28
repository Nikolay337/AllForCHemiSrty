import React, { useState, useEffect } from 'react';
import { Button, Input, Segment, Grid } from 'semantic-ui-react';
import TopicsComponent from './TopicsComponent';
import api from "../../api"

function AdminTopicsComponent(props) {
  
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics?area=${props.path}`)
      .then(response => {
        setTopics(response.data);
      })
      .catch(error => {
        alert('Грешка при зареждането на тема', error);
      });
  }, [props.path]);

  function createTopic(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', selectedFile);
    formData.append('area', props.path);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics`, formData)
      .then(response => {
        setTopics([...topics, response.data]);
        alert("Успешнно създадохте тема");
      })
      .catch(error => {
        alert('Грешка при създаването на тема', error);
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
        <Button size='big' primary style={{ marginLeft: '2rem' }}
          onClick={createTopic}>Създай</Button>
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