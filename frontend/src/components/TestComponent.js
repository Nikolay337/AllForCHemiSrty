import api from "../api"
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Segment, Grid, Input, Header, Image } from 'semantic-ui-react'

function TestComponent() {

  const params = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState([]);
  const [score, setScore] = useState(0);
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
      .then(response =>
        setTest([...test, response.data]))
      .catch(error =>
        alert('Грешка при създаването на тест', error));
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
      })
      .catch(error => alert('Грешка при добавянето на въпрос', error));
  };

  function handleSubmit() {
    
    const unansweredQuestions = questions.filter((question) => !question.selectedAnswer);
    if (unansweredQuestions.length > 0) {
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
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`)
      .then(response =>
        setQuestions(response.data))
      .catch(error =>
        alert('Грешка при зареждането на въпросите', error));
  }, [params.id]);

  return (
    <div>
      {test[0] ? (
        <div>
          {user.admin && (
            <Segment textAlign="center">
              <Input icon="file" style={{ marginLeft: "2rem", width: "17rem" }} type="file" onChange={handleFileSelect} />
              <Button primary size="big" style={{ marginLeft: "2rem" }}
                onClick={addQuestion}>Добави въпрос
              </Button>
              <Button style={{marginLeft: "1rem", backgroundColor: correctAnswer === "А" ? "purple" : "white"}} 
                onClick={() => setCorrectAnswer("А")}>А
              </Button>
              <Button style={{marginLeft: "1rem", backgroundColor: correctAnswer === "Б" ? "purple" : "white"}}
                onClick={() => setCorrectAnswer("Б")}>Б
              </Button>
              <Button style={{marginLeft: "1rem", backgroundColor: correctAnswer === "В" ? "purple" : "white",}}
                onClick={() => setCorrectAnswer("В")}>В
              </Button>
              <Button style={{marginLeft: "1rem", backgroundColor: correctAnswer === "Г" ? "purple" : "white",}}
                onClick={() => setCorrectAnswer("Г")}>Г
              </Button>
            </Segment>
          )}
          <Segment>
            <Header color="purple" size="huge" textAlign="center">
              {test[0] && test[0].name}
            </Header>
            <Grid centered style={{ marginBottom: "5rem" }}>
              {questions.map((question) => (
                <div style={{ margin: "2rem" }} key={question.id}>
                  <Grid.Row centered style={{ width: "70rem", height: "85%" }} columns="1">
                    <Image style={{ width: "70rem", height: "85%" }}
                      src={`${process.env.REACT_APP_BACKEND_URL}/${question.path}`}
                    />
                    <Button style={{marginLeft: "1rem", backgroundColor: question.selectedAnswer === "А" ? "purple" : "white"}}
                      onClick={() => handleAnswerSelect(question.id, "А")}>А
                    </Button>
                    <Button style={{marginLeft: "1rem", backgroundColor: question.selectedAnswer === "Б" ? "purple" : "white"}}
                      onClick={() => handleAnswerSelect(question.id, "Б")}>Б
                    </Button>
                    <Button style={{marginLeft: "1rem", backgroundColor: question.selectedAnswer === "В" ? "purple" : "white",}}
                      onClick={() => handleAnswerSelect(question.id, "В")}>В
                    </Button>
                    <Button style={{marginLeft: "1rem", backgroundColor: question.selectedAnswer === "Г" ? "purple" : "white",}}
                      onClick={() => handleAnswerSelect(question.id, "Г")}>Г
                    </Button>
                  </Grid.Row>
                </div>
              ))}
            </Grid>
            <Button secondary size='massive' style={{ margin: "5rem" }} floated="left"
              onClick={() => navigate(-1)}>Назад</Button>
            <Button secondary size="massive" style={{ margin: "5rem" }} floated="right"
              onClick={handleSubmit}>Предай
            </Button>
          </Segment>
        </div>
      ) : user.admin ? (
        <Button primary size="massive" style={{ marginLeft: "60rem", marginTop: "23rem" }} 
          onClick={createTest}>Създай тест
        </Button>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          <Segment size="massive">
            За съжаление, все още няма качен тест
          </Segment>
          <Button secondary size='massive' onClick={() => navigate(-1)}>Назад</Button>
        </div>
      )}
      {showResults && (
        <Header size="huge" textAlign="center">
          Твоят резултат е {score} от {questions.length}
        </Header>
      )}
    </div>
  );
}

export default TestComponent