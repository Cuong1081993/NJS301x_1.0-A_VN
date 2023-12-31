const express = require("express");

const mainRouter = require("./routes/index");
const path = require("path");
const app = express();

app.use(mainRouter);
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000);
