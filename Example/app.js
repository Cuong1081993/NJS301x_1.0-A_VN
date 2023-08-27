const express = require("express");

const app = express();

app.set("view engie", "pug");
app.set("view", "view");
app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

app.get("/users", (req, res, next) => {
  res.render();
});

app.post("/add-user", (req, res, next) => {
  res.redirect("/users");
});

app.listen(3000);
