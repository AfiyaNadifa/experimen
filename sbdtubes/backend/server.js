require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

require("./config/database");

app.use(express.json());

// STATIC FILE
app.use(express.static(path.join(__dirname, "frontend")));

// ROOT PAGE (INI KUNCI)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// API
app.use("/dashboard", require("./routes/dashboard"));

app.listen(3000, () => {
  console.log("🔥 SERVER AKTIF DI PORT 3000");
});
