const { File } = require('../models');
const { Topic } = require("../models")
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/topics');
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

const createFile = async (req, res) => {
  const { type, topicId } = req.body;
  let { path } = req.body;

  if (!type || !topicId) {
    return res.status(400).json({ error: 'Missing type or topicId' });
  }

  try {
    const file = req.file

    if (file) {
      path = file.path;
    }

    const topic = await Topic.findByPk(topicId);

    if (!topic) {
      return res.status(400).json({ error: 'Invalid topicId' });
    }

    const newFile = await File.create({
      path,
      type,
      topicId
    });
    
    await newFile.save();
    return res.send(newFile);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating file' });
  }
}

const getFile = async (req, res) => {
  const topicId = req.body;
  const type = req.body;

  try {
    const file = await File.findOne({
      where: {
        topicId: topicId,
        type: type
      }
    });

    if (file) {
      return res.status(200).json(file);
    } else {
      return res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
    createFile,
    getFile,
    upload
}