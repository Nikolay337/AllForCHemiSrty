const { Test } = require('../models');

const createTest = async (req, res) => {
  const { name } = req.body;
  const { topicId } = req.params;

  if (!name || !topicId) {
    return res.status(400).send('Name and topicId are required');
  }

  try {
    const newTest = await Test.create({
      name,
      topicId
    });
    
    return res.send(newTest);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

const getTest = async (req, res) => {
  const { topicId } = req.params;

  const test = await Test.findAll({
    where: { topicId }
  });

  if (!test) {
    return res.status(400)
  }
  return res.send(test);  
}

module.exports = {
    createTest,
    getTest
}