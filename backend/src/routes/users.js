const express = require('express');
const router = express.Router();

const {
    createUser,
    login,
    getUser
} = require('../controllers/users');

router.post('/login', login);
router.get('user/:id', getUser)
router.post('/users', createUser);

module.exports = router;