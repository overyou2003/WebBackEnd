const { User } = require("../models");

module.exports = {
  create: (data) => User.create(data),
  findById: (id) => User.findByPk(id),
  findByEmail: (email) => User.findOne({ where: { email } }),
  findByUsername: (username) => User.findOne({ where: { username } }),
  getAll: () => User.findAll(),
  update: async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return user.update(data);
  },
  delete: async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return user.destroy();
  },
};
