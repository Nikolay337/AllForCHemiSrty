import React, {useState} from 'react'
import { Button, Input, Segment, Grid } from 'semantic-ui-react'
import TopicsComponent from './TopicsComponent';

function AdminPage() {

  const [components, setComponents] = useState([]);
  const [componentId, setComponentId] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");

  const handleCreateClick = () => {
    setComponents([...components, { id: componentId, name, selectedFile }]);
    setComponentId(componentId + 1);
    setName("");
    setSelectedFile(null);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleDeleteClick = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  return (
    <div>
      <Segment primary textAlign='center' >
        <Input
          style={{
            height: '3.2rem'
          }}
          size='big'
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input style={{marginLeft: '2rem'}} type="file" onChange={handleFileSelect} />
        <Button size='big' style={{marginLeft: '2rem'}} primary onClick={handleCreateClick}>Create</Button>
      </Segment>
      <Grid centered style={{marginTop: '7rem'}}>
        {components.map((component) => (
          <div key={component.id}>
              <TopicsComponent
                id={component.id}
                name={component.name}
                image={component.selectedFile}
              />
              <Button secondary onClick={() => handleDeleteClick(component.id)}>
                Delete
              </Button>
          </div>
        ))}
        </Grid>
    </div>
  )
}

export default AdminPage