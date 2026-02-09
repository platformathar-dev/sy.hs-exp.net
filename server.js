const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

db.getConnection((err, conn) => {
  if (err) console.error("DB Error:", err);
  else {
    console.log("MySQL Connected");
    conn.release();
  }
});

app.get("/", (req, res) => {
  res.send("HS Syria API is running 🚚");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
