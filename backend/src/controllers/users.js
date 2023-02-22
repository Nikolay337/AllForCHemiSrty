const { User } = require('../models');
const jwt = require('jsonwebtoken');

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

  return res.status(200).json({name});
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.json({ name: user.name, token });
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

    return res.send({newUser});
  } catch (err) {
    return res.status(500)
  }
}

module.exports = {
  createUser,
  login,
  getUser
}