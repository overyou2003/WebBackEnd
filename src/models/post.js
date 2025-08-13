const sequelize = require("./index");
const {Datatypes} = require("sequelize");
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

Post.belongsTo(User,{foreignKey : "UserID",onDelete:"CASCADE"})
User.hasMany(Post, { foreignKey: "userId" });

module.exports = Post