const{ Comment }= require("../models");

module.exports = {
  create: (data) => Comment.create(data),
  findById: (id) => Comment.findByPk(id),
  findByPostId: (postId) => Comment.findAll({ where: { post_id: postId } }),
  update: async (id, data) => {
    const comment = await Comment.findByPk(id);
    if (!comment) return null;
    return comment.update(data);
  },
  delete: async (id) => {
    const comment = await Comment.findByPk(id);
    if (!comment) return null;
    return comment.destroy();
  },
};
