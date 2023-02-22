const express = require('express');
const router = express.Router();

const {
    createQuestion,
    getQuestion
} = require('../controllers/questions');

router.get('/questions/:id', getQuestion);
router.post('/questions', createQuestion);

module.exports = router;