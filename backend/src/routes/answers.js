const express = require('express');
const router = express.Router();

const {
    createAnswer,
    getAnswer
} = require('../controllers/answers');

router.get('/answers/:id', getAnswer);
router.post('/answers', createAnswer);

module.exports = router;