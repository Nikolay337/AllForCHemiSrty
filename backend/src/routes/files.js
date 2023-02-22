const express = require('express');
const router = express.Router();

const {
    createFile,
    getFile,
    upload
} = require('../controllers/files');

router.get('/files/:topicId', getFile);
router.post('/files', upload.single('file'), createFile);

module.exports = router;