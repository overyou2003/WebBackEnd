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

Comment.belongsTo(User, { foreignKey: "userID", onDelete: "CASCADE" });
User.hasMany(Comment, { foreignKey: "userID" });

Comment.belongsTo(Post, { foreignKey: "postID", onDelete: "CASCADE" });
Post.hasMany(Comment, { foreignKey: "postID" });

module.exports = Comment;
