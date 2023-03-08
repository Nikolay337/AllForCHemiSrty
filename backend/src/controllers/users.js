const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {email: email }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    const token = jwt.sign({ name: user.name, id: user.id, admin: user.admin },
      process.env.JWT_SECRET, { expiresIn: '5h' });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing input data' });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(200).json({ message: 'Email already exists', error: true });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json({ message: "User registration successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createUser,
  login
};