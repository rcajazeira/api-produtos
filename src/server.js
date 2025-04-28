const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3001;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "produto",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.get("/produtos", async (req, res) => {
  const [rows] = await pool.promise().query("SELECT * FROM produtos");
  return res.json(rows);
});

app.listen(port, () => {
  console.log(`Aplicação rodando em: http://localhost:${port}`);
});
