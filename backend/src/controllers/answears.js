const db = require('../models');
const Answear = db.Answear

const getAnswear = async (req, res) => {
  const { id } = req.params;

  const answear = await Answear.findOne({
    where: {
      id,
    },
  });

  if (!answear) {
    return res.status(400)
  }

  return res.send(answear);
}

const createAnswear = async (req, res) => {
  const { text, valid } = req.body;

  if (!text || !valid) {
    return res.status(400)
  }

  try {
    let newAnswear = await Answear.create({
      text,
      valid
    });
    return res.send(newAnswear);
  } catch (err) {
    return res.status(500)
  }
}

const updateAnswear = async (req, res) => {
  const { text, valid } = req.body;
  const { id } = req.params;

  const answear = await Answear.findOne({
    where: {
      id,
    },
  });

  if (!answear) {
    return res.status(400)
  }

  try {
    if (text) {
      answear.text = valid;
    }
    if (valid) {
      answear.valid = valid;
    }
    answear.save();
    return res.send({
      message: `Answear ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

//Delete Question
const deleteAnswear = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400)
  }

  const answear = await Answear.findOne({
    where: {
      id,
    },
  });

  if (!answear) {
    return res.status(400)
  }

  try {
    await answear.destroy();
    return res.send({
      message: `Question ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createAnswear,
    updateAnswear,
    deleteAnswear,
    getAnswear
}