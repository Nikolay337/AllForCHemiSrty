const express = require('express');
const router = express.Router();

const {
    createUser,
    getUser,
    login
} = require('../controllers/users');

router.post('/login', login);
router.get('/user', getUser);
router.post('/register', createUser);

module.exports = router;