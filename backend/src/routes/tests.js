const express = require('express');
const router = express.Router();

const {
    createTest,
    getTest
} = require('../controllers/tests');

router.get('/topics/:topicId/tests', getTest);
router.post('/topics/:topicId/tests', createTest);

module.exports = router;