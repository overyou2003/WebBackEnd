const likeService = require("../services/likeService");

module.exports = {
  like: async (req, res) => {
    try {
      const userId = req.user.id;
      const { postId } = req.body; 
      const like = await likeService.likePost(userId, postId);
      res.status(201).json(like);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  unlike: async (req, res) => {
    try {
      const userId = req.user.id;
      const { postId } = req.body;
      const result = await likeService.unlikePost(userId, postId);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  count: async (req, res) => {
    const { postId } = req.params;
    const total = await likeService.countLikes(postId);
    res.json({ postId, likes: total });
  },
};
