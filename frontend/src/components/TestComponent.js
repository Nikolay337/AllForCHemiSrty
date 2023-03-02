import api from "../api"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Button, Segment, Grid, Input, Header, Image } from 'semantic-ui-react'

function TestComponent() {

  const params = useParams();
  const [test, setTest] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showResults, setShowResults] = useState(true);
  // const [selectedAnswer, setSelectedAnswer] = useState();
  const [score, setScore] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  function createTest(event) {
    event.preventDefault();

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`, {name: topicData[0].title})
      .then(response => {
        setTest([...test, response.data]);
        alert("Успешно създадохте тест");
      })
      .catch((error) => {
        alert('Грешка при създаването на тест', error);
      });
  }

  function addQuestion() {

    const formData = new FormData();
    formData.append('correctAnswer', correctAnswer);
    formData.append('file', selectedFile);

    api.post(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`, formData)
      .then(response => {
        setQuestions([...questions, response.data]);
        setCorrectAnswer("");
        alert("Успешно добавихте въпрос");
      })
      .catch((error) => {
        alert('Грешка при добавянето на въпрос', error);
      });
  }

  function handleFileSelect(event) {
    setSelectedFile(event.target.files.item(0));
  }

  // function handleAnswerClick(questionId, answer) {
  //   setQuestions((prevQuestions) =>
  //     prevQuestions.map((question) =>
  //       question.id === questionId ? { ...question, selectedAnswer: answer } : question
  //     )
  //   );
  // }
  
  function handleSubmit() {
    const score = questions.reduce((totalScore, question) => {
      if (question.correctAnswer === question.selectedAnswer) {
        return totalScore + 1;
      } else {
        return totalScore;
      }
    }, 0);
    setScore(score);
    setShowResults(false);
  }

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}`)
      .then(response => {
        setTopicData(response.data);
      })
      .catch(error => {
        alert('Грешка при взимането на името на темата', error);
      });
  }, [params.id]);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests`)
      .then(response => {
        setTest(response.data);
      })
      .catch(error => {
        alert('Грешка при зареждането на теста', error);
      });
  }, [params.id]);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_BACKEND_URL}/topics/${params.id}/tests/questions`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        alert('Грешка при зареждането на въпросите', error);
      });
  }, [params.id]);
  
  return (
    <div>
      {test[0] ? (
        <div>
          {user.admin && (
            <Segment textAlign="center">
              <Input icon="file" style={{ marginLeft: "2rem", width: "17rem" }} type="file" onChange={handleFileSelect} />
              <Button primary size="big" style={{ marginLeft: "2rem" }} onClick={addQuestion}>
                Добави въпрос
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
          {!user.admin && (
            <Segment>
              <Header color="purple" size="huge" textAlign="center">
                {test[0] && test[0].name}
              </Header>
              <Grid centered style={{ marginBottom: "5rem" }}>
                {questions.map((question) => (
                  <div style={{ margin: "2rem" }}>
                    <Grid.Row centered style={{ width: "70rem", height: "85%" }} columns="1">
                      <Image style={{ width: "70rem", height: "85%" }}
                        src={`${process.env.REACT_APP_BACKEND_URL}/${question.path}`}
                      />
                      <Button>А</Button>
                      <Button>Б</Button>
                      <Button>В</Button>
                      <Button>Г</Button>
                    </Grid.Row>
                  </div>
                ))}
              </Grid>
              <Button secondary size="massive" style={{ margin: "5rem" }} floated="right"
                onClick={handleSubmit}>Предай
              </Button>
            </Segment>
          )}
        </div>
      ) : user.admin ? (
        <Button primary size="massive" style={{ marginLeft: "60rem", marginTop: "23rem" }} 
          onClick={createTest}>Създай тест
        </Button>
      ) : (
        <div style={{textAlign: 'center', marginTop: '15%'}}>
          <Segment size="massive">
            За съжаление, все още няма качен тест
          </Segment>
          <Button secondary size='massive' href={`/${topicData[0].area}/${params.id}`}>Назад</Button>
        </div>
      )}
      {!showResults && (
        <Header color="purple" size="huge" textAlign="center">
          Твоят резултат е {score} от {questions.length}
        </Header>
      )}
    </div>
  );
}

export default TestComponent