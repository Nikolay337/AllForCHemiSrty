const db = require('../models');
const User = db.User

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400)
  }

  return res.send(user);
}

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400)
  }

  try {
    let newUser = await User.create({
      name,
      email,
      password,
      role
    });
    return res.send(newUser);
  } catch (err) {
    return res.status(500)
  }
}

const updateUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400)
  }

  try {
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (role) {
      user.role = role;
    }
    
    user.save();
    return res.send({
      message: `User ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400)
  }

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400)
  }

  try {
    await user.destroy();
    return res.send({
      message: `User ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser
}