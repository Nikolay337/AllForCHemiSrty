const express = require('express');
const router = express.Router();

const {
    createComment,
    getComment
} = require('../controllers/comments');

router.get('/topics/:topicId/comments', getComment);
router.post('/topics/:topicId/comments', createComment);

module.exports = router;