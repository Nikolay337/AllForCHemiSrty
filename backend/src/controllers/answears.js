const { Answear } = require('../models');

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

module.exports = {
    createAnswear,
    getAnswear
}