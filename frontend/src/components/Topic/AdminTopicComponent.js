import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Input, Button, Grid } from 'semantic-ui-react'
import TopicComponent from './TopicComponent';

function AdminTopicComponent(props) {

  const [file, setFile] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4002/files?type=nonhighlighted`)
      .then(response => {
        setTopics(response.data)
      })
  }, [props.path]);

  function AddFile(event) {
    event.preventDefault();

    axios.post(`http://localhost:4002/files?type=nonhighlighted`, {
      path: file
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file"
        onChange={(event) => setFile(event.target.value)} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={AddFile}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {topics.map((topic) => (
              <TopicComponent key={topic.id} topic={topic} />
          ))}
        </Grid>
    </div>
  )
}

export default AdminTopicComponent