const express = require("express");

const app = express();

app.use("/users", (req, res) => {
  console.log("Second Middleware");
  res.send("<p>The Middleware that handles just/users /</p>");
});


app.use("/", (req, res) => {
  console.log("First Middleware");
  res.send("<p>The Middleware that handles just /</p>");
});

app.listen(3000);