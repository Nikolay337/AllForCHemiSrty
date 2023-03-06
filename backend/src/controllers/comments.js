const { Comment, User } = require('../models');

const createComment = async (req, res) => {
  const { text, userId } = req.body;
  const { topicId } = req.params;

  try {
    const comment = await Comment.create({
      text,
      userId,
      topicId
    });

    const user = await User.findByPk(userId);
    const commentWithUser = {
      ...comment.toJSON(),
      User: {
        name: user.name
      }
    };

    res.status(201).json(commentWithUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Грешка при създаването на коментар' });
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