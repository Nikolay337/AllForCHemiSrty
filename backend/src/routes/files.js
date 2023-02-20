const express = require('express');
const router = express.Router();

const {
    createFile,
    updateFile,
    deleteFile,
    getFile
} = require('../controllers/files');

router.get('/files/id', getFile);
router.post('/files', createFile);
router.put('/file/:id', updateFile);
router.delete('/file/:id', deleteFile);

module.exports = router;