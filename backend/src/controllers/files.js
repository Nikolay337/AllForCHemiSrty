const File = require('../models');
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
  const { type } = req.body;
  let { path } = req.body;

  if (!type) {
    return res.status(400).json({ error: 'Missing type' });
  }

  try {
    const file = req.file

    if (file) {
      path = file.path;
    }
     const newFile = await File.create({
       path,
       type
     });
    
    await newFile.save();
    return res.send(newFile);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating file' });
  }
}

const getFile = async (req, res) => {
  const { type } = req.query;

  const files = await File.findAll({ where: { type } });

  if (!files) {
     return res.status(404);
  }
  res.send(files);
}

const updateFile = async (req, res) => {
  const { path, type } = req.body;
  const { id } = req.params;

  const file = await File.findOne({
    where: {
      id,
    },
  });

  if (!file) {
    return res.status(400)
  }

  try {
    if (path) {
      file.path = type;
    }
    if (type) {
      file.type = type;
    }
    file.save();
    return res.send({
      message: `File ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

const deleteFile = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400)
  }

  const file = await File.findOne({
    where: {
      id,
    },
  });

  if (!file) {
    return res.status(400)
  }

  try {
    await file.destroy();
    return res.send({
      message: `Question ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createFile,
    updateFile,
    deleteFile,
    getFile,
    upload
}