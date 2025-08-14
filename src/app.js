const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require('./routes/userRoute')

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Debate App API is running!");
});

app.use("/api/users",userRoute);


module.exports = app;
