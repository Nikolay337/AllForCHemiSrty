const { Question }= require('../models');

const getQuestion = async (req, res) => {
  const { id } = req.params;

  const question = await Question.findOne({
    where: { id }
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

module.exports = {
    createQuestion,
    getQuestion
}