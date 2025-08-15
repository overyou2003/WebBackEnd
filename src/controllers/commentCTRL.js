const commentService = require("../services/commentService");

module.exports = {
  create: async (req, res) => {
    try {
      const userId = req.user.id;
      const { postId, content } = req.body;
      const comment = await commentService.createComment(
        userId,
        postId,
        content
      );
      res.status(201).json(comment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const userId = req.user.id;
      const { commentId, content } = req.body;
      const updated = await commentService.updateComment(
        userId,
        commentId,
        content
      );
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const userId = req.user.id;
      const { commentId } = req.body;
      const result = await commentService.deleteComment(userId, commentId);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getByPost: async (req, res) => {
    const { postId } = req.params;
    const comments = await commentService.getCommentsByPost(postId);
    res.json(comments);
  },
};
