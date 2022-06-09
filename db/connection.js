const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "staffing",
});

module.exports = db;
