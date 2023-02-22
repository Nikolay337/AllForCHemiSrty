const express = require('express');
const router = express.Router();

const {
    createTopic,
    getTopic,
    upload
} = require('../controllers/topics');

router.get('/topics', getTopic);
router.post('/topics', upload.single('file'), createTopic);

module.exports = router;