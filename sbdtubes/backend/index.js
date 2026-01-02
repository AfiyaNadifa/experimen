require("dotenv").config();

const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("TEST OK");
});

app.listen(3000, () => {
  console.log("SERVER OK");
});
