const express = require('express');
const router = express.Router();

const {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestion
} = require('../controllers/questions');

router.get('/questions/:id', getQuestion);
router.post('/questions', createQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

module.exports = router;