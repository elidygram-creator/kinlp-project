const express = require("express")
const router = express.Router()
const db = require("../config/db")
const multer = require("multer")
const path = require("path")

// =======================
// IMAGE UPLOAD CONFIG
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage })

// =======================
// GET ALL PEOPLE
// =======================
router.get("/", (req, res) => {
  const sql = "SELECT * FROM people"

  db.query(sql, (err, results) => {
    if (err) {
      console.error("DB ERROR:", err)
      return res.status(500).json({ error: "Database error" })
    }

    res.json(results)
  })
})

// =======================
// ADD PERSON
// =======================
router.post("/", upload.single("image"), (req, res) => {
  const { name, role, email } = req.body
  const image = req.file ? req.file.filename : null

  const sql =
    "INSERT INTO people (name, role, email, image) VALUES (?, ?, ?, ?)"

  db.query(sql, [name, role, email, image], (err, result) => {
    if (err) {
      console.error("INSERT ERROR:", err)
      return res.status(500).json({ error: "Insert failed" })
    }

    res.json({
      message: "Person added successfully",
      id: result.insertId
    })
  })
})

// =======================
// DELETE PERSON
// =======================
router.delete("/:id", (req, res) => {
  const { id } = req.params

  const sql = "DELETE FROM people WHERE id = ?"

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("DELETE ERROR:", err)
      return res.status(500).json({ error: "Delete failed" })
    }

    res.json({ message: "Deleted successfully" })
  })
})

module.exports = router