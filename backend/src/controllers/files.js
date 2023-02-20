const db = require('../models');
const File = db.File

const getFile = async (req, res) => {
  const { id } = req.params;

  const file = await File.findOne({
    where: {
      id,
    },
  });

  if (!file) {
    return res.status(400)
  }

  return res.send(file);
}

const createFile = async (req, res) => {
  const { path, type } = req.body;

  if (!path || !type) {
    return res.status(400)
  }

  try {
    let newFile = await File.create({
      path,
      type
    });
    return res.send(newFile);
  } catch (err) {
    return res.status(500)
  }
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
    getFile
}