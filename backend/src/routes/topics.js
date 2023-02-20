const express = require('express');
const router = express.Router();

const {
    createTopic,
    updateTopic,
    deleteTopic,
    getTopic,
    upload
} = require('../controllers/topics');

router.get('/topics', getTopic);
router.post('/topics', upload.single('file'), createTopic);
router.put('/topics/:id', updateTopic);
router.delete('/topics/:id', deleteTopic);

module.exports = router;