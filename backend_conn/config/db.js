const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kinlp_db",
  port: 3307
})

db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed:", err.message)
  } else {
    console.log("✅ MySQL Connected on port 3307")
  }
})

module.exports = db