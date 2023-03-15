import api from "../api"
import Iframe from 'react-iframe'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Input, Button, Grid, Segment, Checkbox, Loader } from 'semantic-ui-react'
import CommentsComponent from '../components/CommentsComponent'

function TopicComponent() {

  const params = useParams()
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [checked, setChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleChange = (e,data) => setChecked(data.checked);

  function addFile(event) {
    event.preventDefault();

    if (!selectedFile) {
      alert('Моля, изберете файл');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('type', checked ? 'highlighted' : 'nonhighlighted');

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/files`, formData)
      .then(response => {
        setFiles([...files, response.data]);
      })
      .catch((error) => {
        alert('Грешка при добавянето на файл', error);
      });
  }

  function handleFileSelect(event) {
    const selectedFileType = event.target.files[0].type;
    if (selectedFileType === 'application/pdf') {
      setSelectedFile(event.target.files[0]);
    } else {
      alert('Моля, изберете само PDF файлове.');
    }
  }

  useEffect(() => {
    const fileType = checked ? 'highlighted' : 'nonhighlighted';
    setLoading(true);
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/files?type=${fileType}`)
      .then(response => {
        setFiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        alert('Грешка при зареждането на файл', error);
      });
  }, [params.id, checked]);

  if (loading) {
    return <Loader active>Loading...</Loader>
  }

  return (
    <div style={{textAlign: 'center' }}>
      <Grid.Column style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', marginLeft: '1rem', marginRight: '1rem'}}>
          <div style={{fontSize: "2rem", marginRight: '1rem'}}>Необработена тема</div>
          <Checkbox toggle style={{ marginBottom: '2rem', marginTop: '2rem'}} checked={checked} onChange={handleChange} />
          <div style={{fontSize: "2rem", marginLeft: '1rem'}}>Обработена тема</div>
        </div>
      </Grid.Column>
      {!files[0] && !user.admin &&
        <div style={{marginTop: '15%'}}>
          <Segment size='massive'>За съжаление, все още няма качен файл</Segment>
          <Button secondary size='massive' onClick={() => navigate(-1)}>Назад</Button>
        </div>
      }
      {user.admin && !files[0] &&
        <Segment>
          <Input icon='file' type="file" accept=".pdf" style={{marginLeft: '2rem', width: '17rem'}}
            onChange={handleFileSelect} />
          <Button primary size='big' style={{marginLeft: '2rem'}}
            onClick={addFile}>Добави файл</Button>
        </Segment>
      }
      {files[0] &&
        <div>
          <Grid centered>
            {files.map((file) => (
              <div key={file.id}>
                <Segment>
                  <Iframe src={`${process.env.REACT_APP_BACKEND_URL}/${file.path}`} styles={{width: '55rem', height: '75rem'}} />
                </Segment>
                <Button secondary floated="left" size='massive'
                  onClick={() => navigate(-1)}>Назад
                </Button>
                <Button secondary floated='right' size='massive'
                  onClick={() => navigate("test")}>Тест
                </Button>
              </div>
            ))}
          </Grid>
          <Segment style={{textAlign: 'left', marginTop: '2rem'}}>
            <CommentsComponent />
          </Segment>
        </div>
      }
    </div>
  );
}

export default TopicComponent