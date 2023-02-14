const express = require('express')

const db = require('./models');
const Topic = db.Topic;
const User = db.User;
const Areas = db.Areas
const Questions = db.Questions

const app = express()  

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//User CRUD

//Get User
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    });
  }

  return res.send(user);
})

//Create User
app.post("/user", async (req, res) => {
  const { firstName, lastName, password, role } = req.body;

  if (!firstName || !password || !lastName) {
    return res.status(400).send({
      message: 'Please provide a username and a password to create a user!',
    });
  }

  try {
    let newUser = await User.create({
      firstName,
      lastName,
      password,
      role
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Update User
app.put("/user/:id", async (req, res) => {
  const { firstName, lastName, password, role } = req.body;
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    });
  }

  try {
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (password) {
      user.password = password;
    }
    if (role) {
      user.role = role;
    }
    
    user.save();
    return res.send({
      message: `User ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

// Delete user
app.delete("/user/:id", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide a id for the user you are trying to delete!',
    });
  }

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    });
  }

  try {
    await user.destroy();
    return res.send({
      message: `User ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Topic CRUD

//Get Topic
app.get("/topic/:id", async (req, res) => {
  const { id } = req.params;

  const topic = await Topic.findOne({
    where: {
      id,
    },
  });

  if (!topic) {
    return res.status(400).send({
      message: `No topic found with the id ${id}`,
    });
  }

  return res.send(topic);
})

//Create Topic
app.post("/topic", async (req, res) => {
  const { pathName } = req.body;

  if (!pathName) {
    return res.status(400).send({
      message: 'Please provide a pathname to create a topic!',
    });
  }

  try {
    let newTopic = await Topic.create({
      pathName
    });
    return res.send(newTopic);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Update Topic
app.put("/topic/:id", async (req, res) => {
  const { pathName } = req.body;
  const { id } = req.params;

  const topic = await Topic.findOne({
    where: {
      id,
    },
  });

  if (!topic) {
    return res.status(400).send({
      message: `No topic found with the id ${id}`,
    });
  }

  try {
    if (pathName) {
      topic.pathName = pathName;
    }

    topic.save();
    return res.send({
      message: `User ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Delete Topic
app.delete("/topic/:id", async (req, res) => { 
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide a id for the topic you are trying to delete!',
    });
  }

  const topic = await Topic.findOne({
    where: {
      id,
    },
  });

  if (!topic) {
    return res.status(400).send({
      message: `No topic found with the id ${id}`,
    });
  }

  try {
    await topic.destroy();
    return res.send({
      message: `Topic ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})


//Areas CRUD

//Get Area
app.get("/areas/:id", async (req, res) => {
  const { id } = req.params;

  const area = await Areas.findOne({
    where: {
      id,
    },
  });

  if (!area) {
    return res.status(400).send({
      message: `No areas found with the id ${id}`,
    });
  }

  return res.send(area);
})

//Create Area
app.post("/areas", async (req, res) => {
  const { title, pathName } = req.body;

  if (!title || !pathName) {
    return res.status(400).send({
      message: 'Please provide a pathname to create a topic!',
    });
  }

  try {
    let newArea = await Areas.create({
      title,
      pathName
    });
    return res.send(newArea);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Update Area
app.put("/areas/:id", async (req, res) => {
  const { title, pathName } = req.body;
  const { id } = req.params;

  const area = await Areas.findOne({
    where: {
      id,
    },
  });

  if (!area) {
    return res.status(400).send({
      message: `No area found with the id ${id}`,
    });
  }

  try {
    if (title) {
      area.title = title;
    }
    if (pathName) {
      area.pathName = pathName;
    }
    
    area.save();
    return res.send({
      message: `Area ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Delete Area
app.delete("/areas/:id", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide a id for the user you are trying to delete!',
    });
  }

  const area = await Areas.findOne({
    where: {
      id,
    },
  });

  if (!area) {
    return res.status(400).send({
      message: `No area found with the id ${id}`,
    });
  }

  try {
    await area.destroy();
    return res.send({
      message: `Area ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Questions CRUD

//Get Question
app.get("/questions/:id", async (req, res) => {
  const { id } = req.params;

  const question = await Questions.findOne({
    where: {
      id,
    },
  });

  if (!question) {
    return res.status(400).send({
      message: `No question found with the id ${id}`,
    });
  }

  return res.send(question);
})

//Create Question
app.post("/questions", async (req, res) => {
  const { correctAnswer, pathName } = req.body;

  if (correctAnswer || !pathName) {
    return res.status(400).send({
      message: 'Please provide a pathname to create a topic!',
    });
  }

  try {
    let newQuestion = await Questions.create({
      correctAnswer,
      pathName
    });
    return res.send(newQuestion);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Update Question
app.put("/questions/:id", async (req, res) => {
  const { correctAnswer, pathName } = req.body;
  const { id } = req.params;

  const question = await Questions.findOne({
    where: {
      id,
    },
  });

  if (!question) {
    return res.status(400).send({
      message: `No question found with the id ${id}`,
    });
  }

  try {
    if (correctAnswer) {
      question.correctAnswer = correctAnswer;
    }
    if (lastName) {
      question.pathName = pathName;
    }
    
    question.save();
    return res.send({
      message: `Question ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

//Delete Question
app.delete("/questions/:id", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide a id for the user you are trying to delete!',
    });
  }

  const question = await Questions.findOne({
    where: {
      id,
    },
  });

  if (!question) {
    return res.status(400).send({
      message: `No question found with the id ${id}`,
    });
  }

  try {
    await question.destroy();
    return res.send({
      message: `Question ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
})

app.listen(4002, () => console.log("start"))