import React, {useState} from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import HighlightTopicComponent from './HighlightTopicComponent';


function AdminHighlightTopicComponent(props) {

  const [highlightTopics, setHighlightTopics] = useState([]);
  const [highlightTopicId, setHighlightTopicId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreateClick = () => {
    setHighlightTopics([...highlightTopics, { id: highlightTopicId, selectedFile }]);
    setHighlightTopicId(highlightTopicId + 1);
    setSelectedFile(null);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreateClick}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {highlightTopics.map((topic) => (
            <div key={topic.id}>
              <HighlightTopicComponent id={topic.id} image={topic.selectedFile} />
            </div>
          ))}
        </Grid>
      <Button secondary floated='right' style={{margin: '2rem'}} size='massive' href={`${props.id}/test`}>Тест</Button>
    </div>
  )
}

export default AdminHighlightTopicComponent