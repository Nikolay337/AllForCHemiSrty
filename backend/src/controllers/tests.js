const Test = require('../models');

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
    where: {
      id,
    },
  });

  if (!test) {
    return res.status(400)
  }

  return res.send(test);
}

const updateTest = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const test = await Test.findOne({
    where: {
      id,
    },
  });

  if (!test) {
    return res.status(400)
  }

  try {
    if (name) {
      test.name = name;
    }
    test.save();
    return res.send({
      message: `test ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

const deleteTest = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400)
  }

  const test = await test.findOne({
    where: {
      id,
    },
  });

  if (!test) {
    return res.status(400)
  }

  try {
    await test.destroy();
    return res.send({
      message: `test ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createTest,
    updateTest,
    deleteTest,
    getTest
}