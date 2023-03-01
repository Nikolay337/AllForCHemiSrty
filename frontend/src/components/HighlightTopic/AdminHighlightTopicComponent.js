import api from "../../api"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Input, Button, Grid, Segment } from 'semantic-ui-react'
import HighlightTopicComponent from './HighlightTopicComponent';

function AdminHighlightTopicComponent() {

  const params = useParams()
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [topicData, setTopicData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  
  function addFile(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('type', 'highlighted');
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
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/files?type=${"highlighted"}`)
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
          <HighlightTopicComponent key={file.id} file={file} topicData={topicData} />
        ))}
      </Grid>
    </div>
  )
}

export default AdminHighlightTopicComponent