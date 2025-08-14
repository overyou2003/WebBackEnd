const app = require("./app");
const sequelize = require("./models/index");

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log(" Database connected.");
    await sequelize.sync({ alter: true }); 
    app.listen(PORT, () =>
      console.log(` Server running at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Database connection failed:", err);
  }
})();
