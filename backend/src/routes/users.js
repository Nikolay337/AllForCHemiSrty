const express = require('express');
const router = express.Router();

const {
    createUser,
    login
} = require('../controllers/users');

router.post('/login', login);
router.post('/users', createUser);

module.exports = router;