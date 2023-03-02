const express = require('express');
const router = express.Router();

const {
    createFile,
    getFile,
    upload
} = require('../controllers/files');

router.get('/topics/:topicId/files', getFile);
router.post('/topics/:topicId/files', upload.single('file'), createFile);

module.exports = router;