import api from "../api"
import React, { useState, useEffect } from 'react'
import Iframe from 'react-iframe'
import { useParams, useNavigate } from "react-router-dom";
import { Input, Button, Grid, Segment } from 'semantic-ui-react'
import CommentsComponent from '../components/CommentsComponent'

function TopicComponent() {

  const params = useParams()
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  function addFile(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('type', 'nonhighlighted');

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/files`, formData)
      .then(response => {
        setFiles([...files, response.data]);
        alert("Успешно добавихте файл");
      })
      .catch((error) => {
        alert('Грешка при добавянето на файл', error);
      });
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files.item(0));
  }

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/files?type=${"nonhighlighted"}`)
      .then(response => {
        setFiles(response.data);
      })
      .catch(error => {
        alert('Грешка при зареждането на файл', error);
      });
  }, [params.id]);

  return (
    <div style={{ textAlign: 'center' }}>
      {!files[0] && !user.admin &&
        <div style={{marginTop: '15%'}}>
          <Segment size='massive'>За съжаление, все още няма качен файл</Segment>
          <Button secondary size='massive' onClick={() => navigate(-1)}>Назад</Button>
        </div>
      }
      {user.admin && !files[0] &&
        <Segment>
          <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
            onChange={handleFileSelect} />
          <Button primary size='big' style={{ marginLeft: '2rem' }}
            onClick={addFile}>Добави тема</Button>
        </Segment>
      }
      {files[0] &&
        <div>
          <Grid centered>
            {files.map((file) => (
              <div key={file.id}>
                <Segment>
                  <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${file.path}`} width="800" height='1000'/>
                </Segment>
                <Button secondary floated="left" style={{ margin: '2rem' }} size='massive' onClick={() => navigate(-1)}>Назад</Button>
                <Button secondary floated='right' style={{ margin: '2rem' }} size='massive' href={`${file.topicId}/test`}>Тест</Button>
              </div>
            ))}
          </Grid>
          <Segment style={{ textAlign: 'left', marginTop: '2rem' }}>
            <CommentsComponent />
          </Segment>
        </div>
      }
    </div>
  );
}

export default TopicComponent