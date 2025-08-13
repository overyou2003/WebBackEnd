const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./user");
const Post = require("./post");

const Like = sequelize.define(
  "Like",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["userId", "postId"], // ป้องกันกดไลค์ซ้ำ
      },
    ],
  }
);

Like.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Like, { foreignKey: "userId" });

Like.belongsTo(Post, { foreignKey: "postId", onDelete: "CASCADE" });
Post.hasMany(Like, { foreignKey: "postId" });

module.exports = Like;
