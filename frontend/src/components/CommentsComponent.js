import api from "../api"
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Comment, Form, Button } from 'semantic-ui-react'

function CommentsComponent() {

  const params = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  function addComment(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('text', newComment);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/comments`, formData)
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment("");
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
        <Form.TextArea value={newComment} onChange={(event) => setNewComment(event.target.value)} />
        <Button primary content='Add Comment' labelPosition='left' icon='edit' onClick={addComment} />
      </Form>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <Comment.Content>
            <Comment.Author>{comment.name}</Comment.Author>
            <Comment.Text>{comment.text}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  )
}

export default CommentsComponent