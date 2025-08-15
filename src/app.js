const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const bodyParser = require("body-parser");
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')
const likeRoute = require('./routes/likeRoute')
const commentRoute = require('./routes/commentRoute')

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  })
);

app.get("/", (req, res) => {
  res.send("Debate App API is running!");
});

app.use("/api/users",userRoute);
app.use("/api/post",postRoute);
app.use("/api/like",likeRoute);
app.use("/api/comment",commentRoute);

module.exports = app;
