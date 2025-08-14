const userService = require("../services/userService");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await userService.register(username, email, password);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);
      res.json({ message: "Login successful", user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const userID = req.user.id
      const user = await userService.update(userID, req.body);
      res.json({ message: "User updated successfully", user });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const userID = req.user.id;
      await userService.delete(userID);
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};