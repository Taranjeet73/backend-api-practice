const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
} = require("../controllers/notesController");

const validateNote = require("../middleware/validateNote");

router.get("/search", authMiddleware, searchNotes);

router.get("/", authMiddleware, getNotes);

router.get("/:id", authMiddleware, getNoteById);

router.post("/", authMiddleware, validateNote, createNote);

router.put("/:id", authMiddleware, validateNote, updateNote);

router.delete("/:id", authMiddleware, deleteNote);

module.exports = router;