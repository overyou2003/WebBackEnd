const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./user");
const Post = require("./post");

const Comment = sequelize.define("Comment",{
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

Comment.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Comment, { foreignKey: "userId" });

Comment.belongsTo(Post, { foreignKey: "postId", onDelete: "CASCADE" });
Post.hasMany(Comment, { foreignKey: "postId" });

module.exports = Comment;
