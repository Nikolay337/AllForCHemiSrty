const db = require('../models');
const Question = db.Question

const getQuestion = async (req, res) => {
  const { id } = req.params;

  const question = await Question.findOne({
    where: {
      id,
    },
  });

  if (!question) {
    return res.status(400)
  }

  return res.send(question);
}

const createQuestion = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400)
  }

  try {
    let newQuestion = await Question.create({
      text
    });
    return res.send(newQuestion);
  } catch (err) {
    return res.status(500)
  }
}

const updateQuestion = async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  const question = await Question.findOne({
    where: {
      id,
    },
  });

  if (!question) {
    return res.status(400)
  }

  try {
    if (text) {
      question.text = text;
    }
    question.save();
    return res.send({
      message: `Question ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

//Delete Question
const deleteQuestion = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400)
  }

  const question = await Question.findOne({
    where: {
      id,
    },
  });

  if (!question) {
    return res.status(400)
  }

  try {
    await question.destroy();
    return res.send({
      message: `Question ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestion
}