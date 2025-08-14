const bcrypt = require("bcrypt");
const userRepo = require("../repository/userRepo");
const { generateToken } = require("../pkg/jwt")

module.exports = {
  register: async (username, email, password) => {
    const existingUserName = await userRepo.findByUsername(username);
    if (existingUserName) throw new Error("Name already registered");

    const existingUser = await userRepo.findByEmail(email);
    if (existingUser) throw new Error("Email already registered");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepo.create({
      username,
      email,
      password: hashedPassword,
    });

    return { id: user.id, username: user.username, email: user.email };
  },

  login: async (email, password) => {
    const user = await userRepo.findByEmail(email);
    if (!user) throw new Error("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid password");

    const token = generateToken({ id: user.id, email: user.email });

    return { id: user.id, name: user.name, email: user.email,token };
  },

  update: async (id, data) => {
    const existingUser = await userRepo.findById(id);
    if (!existingUser) throw new Error("User not found");

    if (data.username) {
      const usernameUser = await userRepo.findByUsername(data.username);
      if (usernameUser && usernameUser.id !== id) {
        throw new Error("Username already taken");
      }
    }

    if (data.email) {
      const emailUser = await userRepo.findByEmail(data.email);
      if (emailUser && emailUser.id !== id) {
        throw new Error("Email already registered");
      }
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const updatedUser = await userRepo.update(id, data);
    return updatedUser;
  },

  delete: async (id) => {
    const existingUser = await userRepo.findById(id);
    if (!existingUser) throw new Error("User not found");

    await userRepo.delete(id);
    return { message: "User deleted successfully" };
  },
};
