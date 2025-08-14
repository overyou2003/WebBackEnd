const postRepo = require("../repository/postRepo");

module.exports = {
  createPost: async (userId, data) => {
    return postRepo.create({ ...data, userId });
  },

  updatePost: async (userId, postId, data) => {
    const post = await postRepo.findById(postId);
    if (!post) throw new Error("Post not found");
    if (post.userId !== userId) throw new Error("Cannot edit others' posts");
    return postRepo.update(postId, data);
  },

  deletePost: async (userId, postId) => {
    const post = await postRepo.findById(postId);
    if (!post) throw new Error("Post not found");
    if (post.userId !== userId) throw new Error("Cannot delete others' posts");
    await postRepo.delete(postId);
    return { message: "Post deleted successfully" };
  },

  getAllPosts: () => postRepo.getAll(),
  getUserPosts: (userId) => postRepo.findByUser(userId),
};
