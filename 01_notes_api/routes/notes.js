const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
} = require("../controllers/notesController");

const validateNote = require("../middleware/validateNote");

router.get("/search", searchNotes);


router.get("/", getNotes);

router.get("/:id", getNoteById);

router.post("/", validateNote, createNote);

router.put("/:id", validateNote, updateNote);

router.delete("/:id", deleteNote);

module.exports = router;