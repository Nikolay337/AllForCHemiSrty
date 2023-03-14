import api from "../api"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Segment, Grid, Card, Image, Loader } from 'semantic-ui-react';

function TopicsComponent(props) {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  function createTopic(event) {
    event.preventDefault();

    if (!title || !selectedFile) {
      alert("Моля, въведете заглавие и/или изберете файл.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', selectedFile);
    formData.append('area', props.path);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics`, formData)
      .then(response => {
        setTopics([...topics, response.data]);
        setTitle("");
        setSelectedFile(null);
      })
      .catch(error => {
        alert('Грешка при създаването на тема', error);
      });
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  useEffect(() => {
    setLoading(true);
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics?area=${props.path}`)
      .then(response => {
        setTopics(response.data);
      })
      .catch(error => {
        alert('Грешка при зареждането на тема', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.path]);

  if (loading) {
    return <Loader active>Loading...</Loader>
  }

  return (
    <div>
      {user.admin &&
        <Segment textAlign='center'>
          <Input style={{height: '3.2rem'}} size='big' type="text" placeholder="Заглавие на темата" value={title}
            onChange={(event) => setTitle(event.target.value)}/>
          <Input icon='file' style={{marginLeft: '2rem', width: '17rem'}} type="file"
            onChange={handleFileSelect}
          />
          <Button primary size='big' style={{marginLeft: '2rem'}}
            onClick={createTopic}>Създай</Button>
        </Segment>
      }
      {!topics[0] && !user.admin &&
        <div style={{textAlign: 'center', marginTop: '15%'}}>
          <Segment size='massive'>За съжаление, все още няма качени теми</Segment>
          <Button secondary size='massive' onClick={() => navigate(-1)}>Назад</Button>
        </div>
      } 
      <Grid centered style={{margin: '5rem'}}>
        {topics.map((topic) => (
          <Card key={topic.id} style={{width: '17rem', height: '20rem', margin: '2rem'}} onClick={() => navigate(`${topic.id}`)}>
            <Card.Content>
              <Card.Header style={{textAlign: 'center'}}>
                {topic.title}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Image style={{height: '10rem'}} src={`${process.env.REACT_APP_BACKEND_URL}/${topic.path}`} />
            </Card.Content>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default TopicsComponent;