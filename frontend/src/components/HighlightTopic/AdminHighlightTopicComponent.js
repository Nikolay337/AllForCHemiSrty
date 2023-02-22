import axios from 'axios';
import React, { useState } from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import HighlightTopicComponent from './HighlightTopicComponent';


function AdminHighlightTopicComponent() {

  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  function addFile(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('file', selectedFile);
    formData.append('type', 'highlighted');

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/files`, formData)
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
  return (
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
      <Button size='big' primary style={{ marginLeft: '2rem' }}
        onClick={addFile}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {files.map((file) => (
            <div key={file.id}>
              <HighlightTopicComponent key={file.id} topic={file} />
            </div>
          ))}
        </Grid>
    </div>
  )
}

export default AdminHighlightTopicComponent