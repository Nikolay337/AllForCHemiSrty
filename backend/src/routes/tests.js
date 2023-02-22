const express = require('express');
const router = express.Router();

const {
    createTest,
    getTest
} = require('../controllers/tests');

router.get('/tests/:id', getTest);
router.post('/tests', createTest);

module.exports = router;