const { Comment } = require('../models');

const createComment = async (req, res) => {
  const { text } = req.body;
  const { topicId } = req.params;
  const { userId } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Missing text or name' });
  }
console.log(userId);
  try {
    const newComment = await Comment.create({
      text,
      topicId,
      userId
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
      where: { topicId },
      include: {
        model: User,
        attributes: ['name']
      }
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