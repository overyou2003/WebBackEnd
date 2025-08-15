const likeRepo = require("../repository/likeRepo");

module.exports = {
  likePost: async (userId, postId) => {
    const existing = await likeRepo.findOne(userId, postId);
    if (existing) throw new Error("You already liked this post");

    return likeRepo.create({ userId, postId });
  },

  unlikePost: async (userId, postId) => {
    const deleted = await likeRepo.delete(userId, postId);
    if (!deleted) throw new Error("You have not liked this post");
    return { message: "Unliked successfully" };
  },

  countLikes: (postId) => likeRepo.countByPost(postId),
};
