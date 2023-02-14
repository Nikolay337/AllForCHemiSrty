import React, {useState} from 'react'
import { Input, Button, Grid } from 'semantic-ui-react'
import HighlightTopicComponent from './HighlightTopicComponent';


function AdminHighlightTopicComponent() {

  const [highlightTopic, setHighlightTopic] = useState([]);
  const [highlightTopicId, setHighlightTopicId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreate = () => {
    setHighlightTopic([...highlightTopic, { id: highlightTopicId, selectedFile }]);
    setHighlightTopicId(highlightTopicId + 1);
    setSelectedFile(null);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <Input icon='file' style={{ marginLeft: '2rem', width: '17rem' }} type="file" onChange={handleFileSelect} />
      <Button size='big' primary style={{ marginLeft: '2rem' }} onClick={handleCreate}>Добави тема</Button>
        <Grid centered style={{ marginTop: '7rem'}}>
          {highlightTopic.map((topic) => (
            <div key={topic.id}>
              <HighlightTopicComponent topic={topic} />
            </div>
          ))}
        </Grid>
    </div>
  )
}

export default AdminHighlightTopicComponent