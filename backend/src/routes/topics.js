const express = require('express');
const router = express.Router();

const {
    createTopic,
    getTopic,
    getTopicData,
    upload
} = require('../controllers/topics');

router.get('/topics', getTopic);
router.get('/topics/:id', getTopicData);
router.post('/topics', upload.single('file'), createTopic);

module.exports = router;