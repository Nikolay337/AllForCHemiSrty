const express = require('express');
const router = express.Router();

const {
    createUser,
    updateUser,
    deleteUser,
    getUser
} = require('../controllers/users');

router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;