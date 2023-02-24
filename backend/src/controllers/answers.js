const { Answer } = require('../models');

const getAnswer = async (req, res) => {
  const { id } = req.params;

  const answer = await Answer.findOne({
    where: {
      id,
    },
  });

  if (!answer) {
    return res.status(400)
  }

  return res.send(answer);
}

const createAnswer = async (req, res) => {
  const { text, valid } = req.body;

  if (!text || !valid) {
    return res.status(400)
  }

  try {
    let newAnswer = await Answer.create({
      text,
      valid
    });
    return res.send(newAnswer);
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createAnswer,
    getAnswer
}