const sequelize = require("./index");
const { DataTypes } = require("sequelize"); // ✅ D ใหญ่ และ T ใหญ่
const User = require("./user");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Post.belongsTo(User, { foreignKey: "UserID", onDelete: "CASCADE" });
User.hasMany(Post, { foreignKey: "UserID" }); 

module.exports = Post;
