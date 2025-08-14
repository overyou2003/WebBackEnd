const postService = require("../services/postService");

module.exports = {
  create: async (req, res) => {
    try {
      const post = await postService.createPost(req.user.id, req.body);
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const post = await postService.updatePost(
        req.user.id,
        req.params.id,
        req.body
      );
      res.json(post);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await postService.deletePost(req.user.id, req.params.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    const posts = await postService.getAllPosts();
    res.json(posts);
  },

  getMine: async (req, res) => {
    const posts = await postService.getUserPosts(req.user.id);
    res.json(posts);
  },
};
