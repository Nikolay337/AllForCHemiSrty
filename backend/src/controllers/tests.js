const { Test } = require('../models');

const createTest = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400)
  }

  try {
    let newTest = await Test.create({
      name
    });
    return res.send(newTest);
  } catch (err) {
    return res.status(500)
  }
}

const getTest = async (req, res) => {
  const { id } = req.params;

  const test = await Test.findOne({
    where: { id }
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