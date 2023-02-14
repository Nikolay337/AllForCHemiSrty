import React, {useState} from 'react'
import { Button, Input, Segment, Grid } from 'semantic-ui-react'
import TopicsComponent from './TopicsComponent';

function AdminTopicsComponent(props) {

  const [topics, setTopics] = useState([]);
  const [topicsId, setTopicsId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    setTopics([...topics, { id: topicsId, title, selectedFile }]);
    setTopicsId(topicsId + 1);
    setTitle("");
    setSelectedFile(null);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <Segment primary textAlign='center'>
        <Input style={{ height: '3.2rem'}} size='big' type="text" placeholder="Заглавие на темата" value={title} onChange={(event) => setTitle(event.target.value)} />
        <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
        <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreate}>Създай</Button>
      </Segment>
        <Grid centered style={{ marginTop: '7rem'}}>
        {topics.map((topic) => (
          <div key={topics.id}>
              <TopicsComponent topic={topic} path={props.path}/>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export default AdminTopicsComponent