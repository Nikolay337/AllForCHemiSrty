const express = require('express');
const router = express.Router();

const {
    createAnswear,
    getAnswear
} = require('../controllers/answears');

router.get('/answears/:id', getAnswear);
router.post('/answears', createAnswear);

module.exports = router;