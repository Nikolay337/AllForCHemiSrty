import api from "../api"
import React, { useState, useEffect } from 'react'
import Iframe from 'react-iframe'
import { useParams } from "react-router-dom";
import { Input, Button, Grid, Segment } from 'semantic-ui-react'

function TopicComponent() {

  const params = useParams()
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [topicData, setTopicData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  function addFile(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('type', 'nonhighlighted');
    formData.append('topicId', params.id);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/files`, formData)
      .then((response) => {
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

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}`)
      .then(response => {
        setTopicData(response.data);
      })
      .catch(error => {
        alert('Грешка при взимането на името на темата', error);
      });
  }, [params.id]);

  return (
    <div style={{ textAlign: 'center' }}>
      {!user.admin || (!files[0] &&
        <Segment>
          <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
          onChange={handleFileSelect} />
        <Button primary size='big' style={{ marginLeft: '2rem' }}
          onClick={addFile}>Добави тема</Button>
        </Segment>
      )}
      <Grid centered style={{ marginTop: '7rem'}}>
        {files.map((file) => (
          <div>
            <Segment>
              <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${file.path}`} width="800" height='1000'/>
            </Segment>
            {/* <Button secondary floated='left' style={{ margin: '2rem' }} size='massive' href={`/${topicData[0].area}`}>Назад</Button> */}
            <Button secondary floated='right' style={{ margin: '2rem' }} size='massive' href={`${file.topicId}/test`}>Тест</Button>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default TopicComponent