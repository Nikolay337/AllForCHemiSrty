import React, {useState} from 'react'
import { Image, Button, Grid, Input } from 'semantic-ui-react'

function TopicComponent(props) {

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
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreateClick}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {topics.map((topic) => (
            <div key={topic.id}>
              <Image size='massive' src={topic.selectedFile} />
            </div>
          ))}
        </Grid>
      <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${props.id}/test`}>Тест</Button>
    </div>
  )
}

export default TopicComponent