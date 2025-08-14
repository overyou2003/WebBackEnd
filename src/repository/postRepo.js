const  Post  = require("../models");

module.exports = {
  create: (data) => Post.create(data),
  findById: (id) => Post.findByPk(id),
  getAll: () => Post.findAll(),
  findByUserId: (userId) => Post.findAll({ where: { user_id: userId } }),
  update: async (id, data) => {
    const post = await Post.findByPk(id);
    if (!post) return null;
    return post.update(data);
  },
  delete: async (id) => {
    const post = await Post.findByPk(id);
    if (!post) return null;
    return post.destroy();
  },
};
