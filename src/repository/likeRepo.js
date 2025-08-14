const{ Like } = require("../models");

module.exports = {
  create: (data) => Like.create(data),
  findByPostId: (postId) => Like.findAll({ where: { post_id: postId } }),
  findByUserAndPost: (userId, postId) =>
    Like.findOne({ where: { user_id: userId, post_id: postId } }),
  delete: async (id) => {
    const like = await Like.findByPk(id);
    if (!like) return null;
    return like.destroy();
  },
};
