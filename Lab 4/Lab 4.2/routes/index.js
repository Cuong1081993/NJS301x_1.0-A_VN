const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "index.html"));
});
router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "users.html"));
});
module.exports = router;
