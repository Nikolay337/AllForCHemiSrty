import React, {useState} from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import TopicComponent from './TopicComponent';

function AdminTopicComponent() {

  const [topic, setTopic] = useState([]);
  const [topicId, setTopicId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreate = () => {
    setTopic([...topic, { id: topicId, selectedFile }]);
    setTopicId(topicId + 1);
    setSelectedFile(null);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreate}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {topic.map((topic) => (
            <div key={topic.id}>
              <TopicComponent topic={topic} />
            </div>
          ))}
        </Grid>
    </div>
  )
}

export default AdminTopicComponent