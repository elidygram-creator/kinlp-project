const express = require("express")
const cors = require("cors")

const app = express()

require("./config/db")

// ✅ IMPORTANT
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/uploads", express.static("uploads"))

app.use("/api/people", require("./routes/people"))
app.use("/api/messages", require("./routes/messages"))

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Backend running"
  })
})

const PORT = 9000

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`)
})