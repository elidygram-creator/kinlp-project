const express = require("express")
const cors = require("cors")

const app = express()

// =====================
// DATABASE CONNECTION
// =====================
require("./config/db")

// =====================
// MIDDLEWARE
// =====================
app.use(cors())
app.use(express.json())

// =====================
// STATIC FILES (IMAGES)
// =====================
app.use("/uploads", express.static("uploads"))

// =====================
// ROUTES
// =====================
app.use("/api/people", require("./routes/people"))
app.use("/api/messages", require("./routes/messages"))

// (OPTIONAL - if you have partners route later)
// app.use("/api/partners", require("./routes/partners"))

// =====================
// START SERVER
// =====================
app.listen(8000, () => {
  console.log("🚀 Server running on port 8000")
  console.log("✅ API: http://localhost:8000/api")
})