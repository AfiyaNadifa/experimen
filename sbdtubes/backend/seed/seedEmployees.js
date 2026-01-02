require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const TOTAL = 500000;
let values = [];

for (let i = 1; i <= TOTAL; i++) {
  values.push([
    `Employee ${i}`,
    i % 2 === 0 ? "IT" : "HR",
    i % 3 === 0 ? "Inactive" : "Active",
  ]);
}

const sql =
  "INSERT INTO employees (name, department, status) VALUES ?";

db.query(sql, [values], (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("✅ 500.000 data berhasil di-generate");
  }
  db.end();
});
