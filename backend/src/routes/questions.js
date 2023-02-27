const express = require('express');
const router = express.Router();

const {
    createQuestion,
    getQuestion,
    upload
} = require('../controllers/questions');

router.post('/topics/:testId/tests/questions', upload.single('file'), createQuestion);
router.get('/topics/:testId/tests/questions', getQuestion);

module.exports = router;