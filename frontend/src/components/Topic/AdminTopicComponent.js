import api from "../../api"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Input, Button, Grid, Segment } from 'semantic-ui-react'
import TopicComponent from './TopicComponent';

function AdminTopicComponent() {

  const params = useParams()
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [topicData, setTopicData] = useState([]);

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
      {files[0] ?
        <Grid centered style={{ marginTop: '7rem'}}>
          {files.map((file) => (
            <TopicComponent key={file.id} file={file} topicData={topicData} />
          ))}
        </Grid>
      :
        <Segment>
          <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
            onChange={handleFileSelect} />
          <Button primary size='big' style={{ marginLeft: '2rem' }}
            onClick={addFile}>Добави тема</Button>
        </Segment>
      }
    </div>
  )
}

export default AdminTopicComponent