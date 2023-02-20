const express = require('express');
const router = express.Router();

const {
    createAnswear,
    updateAnswear,
    deleteAnswear,
    getAnswear
} = require('../controllers/answears');

router.get('/answears/:id', getAnswear);
router.post('/answears', createAnswear);
router.put('/answears/:id', updateAnswear);
router.delete('/answears/:id', deleteAnswear);

module.exports = router;