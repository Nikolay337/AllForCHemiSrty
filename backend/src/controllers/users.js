const { User } = require('../models');

const getUser = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send('Missing email or password');
  }

  const user = await User.findOne({
    where: { name }
  });

  if (!user) {
    return res.status(401).send('Invalid login credentials');
  }

  return res.send(name)
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    res.send({email, password});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400)
  }

  try {
    let newUser = await User.create({
      name,
      email,
      password
    });

    return res.send(newUser);
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
  createUser,
  login,
  getUser
}