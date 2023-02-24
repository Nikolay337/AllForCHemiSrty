const { File } = require('../models');
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

    const newFile = await File.create({
      path,
      type,
      topicId
    });
    
    return res.send(newFile);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating file' });
  }
}

const getFile = async (req, res) => {
  const { topicId } = req.params;

  const file = await File.findAll({
    where: { topicId, type: req.query.type }
  });

  if (!file) {
    return res.status(404);
  } 
  return res.send(file);
}

module.exports = {
    createFile,
    getFile,
    upload
}