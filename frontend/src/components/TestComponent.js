import api from "../api"
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Segment, Grid, Input, Header, Image, Loader } from 'semantic-ui-react'

function TestComponent() {

  const params = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [topicData, setTopicData] = useState("");
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

function createTest(event) {
  event.preventDefault();

  api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`,
    { name: topicData[0].title })
    .then(response => {
      setTest([...test, response.data])
    })
    .catch(error => {
      alert('Грешка при създаването на тест', error)
    });
};

  function addQuestion(event) {
    event.preventDefault();

    if (!selectedFile || !correctAnswer) {
      alert('Моля, изберете файл и/или верен отговор за въпроса.');
      return;
    }

    const formData = new FormData();
    formData.append('correctAnswer', correctAnswer);
    formData.append('file', selectedFile);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`, formData)
      .then(response => {
        setQuestions([...questions, response.data]);
        setCorrectAnswer("");
        setSelectedFile(null)
      })
      .catch(error => {
        alert('Грешка при добавянето на въпрос', error)
      });
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    const unansweredQuestions = questions.filter((question) =>
      !question.selectedAnswer);
    if (unansweredQuestions.length) {
      alert('Моля, отговорете на всички въпроси.');
      return;
    }

    let score = 0;
    questions.forEach(question => {
      if (question.selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
    setScore(score);
    setShowResults(true);
    resetAnswers();
  };
  
  function handleAnswerSelect(questionId, answer) {
  
    if (showResults) {
      return;
    }

    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, selectedAnswer: answer };
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  };

  function resetAnswers() {

    const updatedQuestions = questions.map((question) => {
      return { ...question, selectedAnswer: "" };
    });
    setQuestions(updatedQuestions);
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files.item(0));
  };

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}`)
      .then(response =>
        setTopicData(response.data))
      .catch(error =>
        alert('Грешка при взимането на заглавието на тема', error));
  }, [params.id]);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`)
      .then(response =>
        setTest(response.data))
      .catch(error =>
        alert('Грешка при зареждането на теста', error));
  }, [params.id]);

  useEffect(() => {
    setLoading(true);
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`)
      .then(response => {
        setQuestions(response.data)
      })
      .catch(error => {
        alert('Грешка при зареждането на въпросите', error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);
  
  if (loading) {
    return <Loader active>Loading...</Loader>
  }

  return (
    <div>
      {test[0] ? (
        <div>
          {user.admin && (
            <Segment textAlign="center">
              <Input icon="file" style={{marginRight: '1rem', width: '17rem'}} type="file" onChange={handleFileSelect} />
              <Button primary size="big" style={{marginRight: '1rem'}} onClick={addQuestion}>Добави въпрос</Button>
              {['А', 'Б', 'В', 'Г'].map((answer) => (
                <Button key={answer} style={{marginLeft: '1rem', backgroundColor: correctAnswer === answer ? 'indigo' : 'white'}}
                  onClick={() => setCorrectAnswer(answer)}>{answer}
                </Button>
              ))}
            </Segment>
          )}
          <div>
            <Header size="huge" textAlign="center" style={{color: 'indigo', margin: '2rem'}}>
              {test[0].name}
            </Header>
            {!questions.length && !user.admin && (
              <Segment size="massive" textAlign="center">
                <p>За съжаление, все още няма въпроси към този тест</p>
                <Button secondary size='massive'
                  onClick={() => navigate(-1)}>Назад
                </Button>
              </Segment>
            )}
            <Grid centered>
              {questions.map((question) => (
                <div key={question.id}>
                  <Grid.Row centered style={{width: '70rem', height: '85%', marginTop: '2rem'}}>
                    <Image style={{width: '70rem', height: '85%'}} src={`${process.env.REACT_APP_BACKEND_URL}/${question.path}`} />
                    {!user.admin && ['А', 'Б', 'В', 'Г'].map((answer) => (
                      <Button size="big" key={answer} 
                        style={{
                          marginLeft: '1.5rem', 
                          backgroundColor: question.selectedAnswer === answer ? 'indigo' : 'white',
                          color: question.selectedAnswer === answer ? 'white' : 'black',
                          borderRadius: '15px',
                          fontWeight: 'bold'
                        }}
                        onClick={() => handleAnswerSelect(question.id, answer)}>{answer}
                      </Button>
                    ))}
                  </Grid.Row>
                </div>
              ))}
            </Grid>
            {!user.admin && (
              <div>
                {questions.length > 0 && (
                  <div style={{margin: "3rem"}}>
                    <Button secondary size='massive' floated="left"
                      onClick={() => navigate(-1)}>Назад
                    </Button>
                    <Button secondary size="massive" floated="right"
                      onClick={handleSubmit}>Предай
                    </Button>
                  </div>
                )}
              </div>
            )}
            {showResults && (
              <Segment size="massive" textAlign="center">
                <Header as="h2">Тестът приключи!</Header>
                <p>Вашият резултат е: {score} / {questions.length}</p>
                <Button primary size="big" style={{display: 'flex', textAlign: 'center', margin: '0 auto'}}
                  onClick={() => setShowResults(false)}>Направи нов тест
                </Button>
                <Button secondary size='massive' style={{display: 'flex', textAlign: 'left'}}
                  onClick={() => navigate(-1)}>Назад
                </Button>
              </Segment>
            )}
          </div>
        </div>
       ) : user.admin ? (
        <Button primary size="massive" style={{marginLeft: "60rem", marginTop: "25rem"}}
          onClick={createTest}>Създай тест
        </Button>
      ) : (
        <div style={{textAlign: 'center', marginTop: '15%'}}>
          <Segment size="massive">
            За съжаление, все още няма качен тест
          </Segment>
          <Button secondary size='massive' onClick={() => navigate(-1)}>
            Назад
          </Button>
        </div>
      )}
    </div>
  )
}

export default TestComponent