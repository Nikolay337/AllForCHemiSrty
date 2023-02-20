const { Topic } = require('../models'); 
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

const createTopic = async (req, res) => {
  const { title, area } = req.body;
  let { path } = req.body;
  if (!title || !area) {
    return res.status(400).json({ error: 'Missing title or area' });
  }

  try {
    const file = req.file;

    if (file) {
      path = file.path;
    }

    const newTopic = await Topic.create({
      title,
      path,
      area
    });

    await newTopic.save();
    return res.send(newTopic);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating topic' });
  }
}

const getTopic = async (req, res) => {
  const { area } = req.query;

  const topics = await Topic.findAll({ where: { area } });

  if (!topics) {
     return res.status(404);
  }
  res.send(topics);
}

const updateTopic = async (req, res) => {
  const { title, path, area } = req.body;
  const { id } = req.params;

  const topic = await Topic.findOne({
    where: {
      id
    },
  });

  if (!topic) {
    return res.status(400)
  }

  try {
    if (title) {
      topic.title = title;
    }
    if (path) {
      topic.path = path;
    }
    if (area) {
      topic.area = area;
    }

    topic.save();
    return res.send({
      message: `Topic ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

const deleteTopic = async (req, res) => { 
  const { id } = req.body;
  if (!id) {
    return res.status(400)
  }

  const topic = await Topic.findOne({
    where: {
      id,
    },
  });

  if (!topic) {
    return res.status(400)
  }

  try {
    await topic.destroy();
    return res.send({
      message: `Topic ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createTopic,
    updateTopic,
    deleteTopic,
    getTopic,
    upload
}