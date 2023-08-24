const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Always run");
  res.send("<p>The Middleware that handles just /</p>");
  next();
});

app.use("/", (req, res, next) => {
  console.log("Always run 2");
  //   res.send("<p>The Middleware that handles just 2 /</p>");
  //   next();
});

app.use("/users", (req, res, next) => {
  console.log("Always run go on");
  res.send("<p>The Middleware that handles just /users</p>");
});

app.listen(3000);
