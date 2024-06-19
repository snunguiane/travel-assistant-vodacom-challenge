const express = require("express");
const app = express();
const dataRouter = require("./routes/data");
const authRouter = require("./routes/auth");

app.use("/api/data", dataRouter);
app.use("/api/auth", authRouter);

module.exports = app;
