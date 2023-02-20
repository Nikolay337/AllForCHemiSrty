const express = require('express');
const router = express.Router();

const {
    createTest,
    updateTest,
    deleteTest,
    getTest
} = require('../controllers/tests');

router.get('/tests/:id', getTest);
router.post('/tests', createTest);
router.put('/tests/:id', updateTest);
router.delete('/tests/:id', deleteTest);

module.exports = router;