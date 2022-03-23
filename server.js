const express = require("express");
const { appendFile } = require("fs");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
