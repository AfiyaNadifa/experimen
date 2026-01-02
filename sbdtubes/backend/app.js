require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// TEST ROUTE
app.get("/test", (req, res) => {
  res.send("TEST OK");
});

// DASHBOARD ROUTE (INLINE, TANPA FILE LAIN)
app.get("/dashboard", (req, res) => {
  res.json({ message: "Dashboard hidup" });
});

app.listen(3000, () => {
  console.log("🔥 SERVER AKTIF DI PORT 3000");
});
