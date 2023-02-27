const express = require('express');
const router = express.Router();

const {
    createQuestion,
    getQuestion,
    upload
} = require('../controllers/questions');

router.get('topics/:topicId/tests/questions', getQuestion);
router.post('topics/:topicId/tests/questions', upload.single('file'), createQuestion);

module.exports = router;