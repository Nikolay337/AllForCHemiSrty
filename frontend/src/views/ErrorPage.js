import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';

function ErrorPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/home');
  }, 3000);

  return (
    <Container>
      <Segment placeholder>
        <Header icon>
          <Icon name='warning circle' />
          Oops! Something went wrong!
        </Header>
        <Segment.Inline>
          You will be redirected to the home page in 3 seconds.
        </Segment.Inline>
      </Segment>
    </Container>
  );
}

export default ErrorPage;