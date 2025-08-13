const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const User = require("./user");
const Post = require("./post");

const Like = sequelize.define("Like",{
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
        fields: ["userID", "postID"], // ป้องกันกดไลค์ซ้ำ
      },
    ],
  }
);

Like.belongsTo(User, { foreignKey: "userID", onDelete: "CASCADE" });
User.hasMany(Like, { foreignKey: "userID" });

Like.belongsTo(Post, { foreignKey: "postID", onDelete: "CASCADE" });
Post.hasMany(Like, { foreignKey: "postID" });

module.exports = Like;
