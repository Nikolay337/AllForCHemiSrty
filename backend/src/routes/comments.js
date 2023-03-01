const express = require('express');
const router = express.Router();

const {
    createComment,
    getComment
} = require('../controllers/comments');

router.post('/topics/:topicId/comments', createComment);
router.get('/topics/:topicId/comments', getComment);

module.exports = router;