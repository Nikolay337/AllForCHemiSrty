import React, {useState} from 'react'
import { Input, Button, Segment, Grid } from 'semantic-ui-react'
import TopicComponent from './TopicComponent';

function AdminTopicsComponent(props) {
  const [topics, setTopics] = useState([]);
  const [topicId, setTopicId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreateClick = () => {
    setTopics([...topics, { id: topicId, selectedFile }]);
    setTopicId(topicId + 1);
    setSelectedFile(null);
  };

  return (
    <div>
      <Input style={{ marginLeft: '2rem' }} type="file" onChange={handleFileSelect} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreateClick}>Създай</Button>
      <Segment>
        <Grid centered style={{ marginTop: '7rem'}}>
        {topics.map((topic) => (
          <div key={topic.id}>
            <TopicComponent id={topic.id} image={topic.selectedFile} />
          </div>
        ))}
        </Grid>
      </Segment>
      <Button href={`${props.id}/test`}>Тест</Button>
    </div>
  )
}

export default AdminTopicsComponent