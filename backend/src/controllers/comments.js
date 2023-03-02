const { Comment } = require('../models');

const createComment = async (req, res) => {
  const { text, name } = req.body;
  const { topicId } = req.params;

  if (!text || !name) {
    return res.status(400).json({ error: 'Missing text or name' });
  }

  try {
    const newComment = await Comment.create({
      text,
      name,
      topicId
    });

    return res.send(newComment);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating comment' });
  }
};

const getComments = async (req, res) => {
  const { topicId } = req.params;

  try {
    const comments = await Comment.findAll({
      where: { topicId }
    });

    return res.send(comments);
  } catch (err) {
    return res.status(500).json({ error: 'Error fetching comments' });
  }
};

module.exports = {
  createComment,
  getComments
}