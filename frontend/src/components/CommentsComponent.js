import api from "../api"
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Comment, Form, Button } from 'semantic-ui-react'

function CommentsComponent() {

  const params = useParams();
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function addComment(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('text', "xcvxcvjxclkvjxcv");
    formData.append('userId', user.id);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/comments`, formData)
      .then((response) => {
        setComments([...comments, response.data]);
      })
      .catch((error) => {
        alert('Грешка при добавянето на коментар', error);
      });
  }

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        alert('Error fetching comments', error);
      });
  }, [params.id]);

  return (
    <Comment.Group>
      <Form>
        <Form.TextArea />
        <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={addComment} />
      </Form>
      <Comment>
        <Comment.Content>
          <Comment.Author></Comment.Author>
          <Comment.Text>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  )
}

export default CommentsComponent