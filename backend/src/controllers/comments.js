const { Comment } = require('../models')

const createComment = async (req, res) => {
  const { text, name, userId } = req.body;
  const { topicId } = req.params;

  if (!text || !name || !userId) {
    return res.status(400).json({ error: 'Missing text, name, or userId' });
  }

  try {
    const newComment = await Comment.create({
      text,
      name,
      topicId,
      userId
    });
    
    return res.send(newComment);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating file' });
  }
}

const getComment = async (req, res) => {
  const { topicId } = req.params;

  const comment = await Comment.findAll({
    where: { topicId }
  });

  if (!comment) {
    return res.status(404);
  } 
  return res.send(comment);
}

module.exports = {
    createComment,
    getComment
}