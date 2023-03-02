const express = require('express');
const router = express.Router();

const {
  createComment,
  getComments
} = require('../controllers/comments');

router.post('/topics/:topicId/comments', createComment);
router.get('/topics/:topicId/comments', getComments);

module.exports = router;