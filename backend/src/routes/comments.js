const express = require('express');
const router = express.Router();

const {
    createComment,
    getComment
} = require('../controllers/comments');

router.get('/topics/:topicId/comments', getComment);
router.post('/comments', createComment);

module.exports = router;