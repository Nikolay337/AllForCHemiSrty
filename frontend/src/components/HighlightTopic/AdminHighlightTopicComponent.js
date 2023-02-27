import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Input, Button, Grid, Segment } from 'semantic-ui-react'
import HighlightTopicComponent from './HighlightTopicComponent';

function AdminHighlightTopicComponent() {

  const params = useParams()
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  function addFile(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('type', 'highlighted');
    formData.append('topicId', params.id);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/files`, formData)
      .then((response) => {
        setFiles([...files, response.data]);
      })
      .catch((error) => {
        console.error('Error uploading file', error);
      });
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files.item(0));
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/files?type=${"highlighted"}`)
      .then(response => {
        setFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching topics', error);
      });
  }, [params.id]);
  
  return (
    <div style={{ textAlign: 'center' }}>
      {files[0] ?
        <Grid centered style={{ marginTop: '7rem'}}>
          {files.map((file) => (
            <HighlightTopicComponent key={file.id} file={file} />
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

export default AdminHighlightTopicComponent