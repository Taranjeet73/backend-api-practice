const Note = require("../models/note");

// GET all notes
const getNotes = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const notes = await Note.find()
      .skip(skip)
      .limit(limit);

    res.json(notes);
  } catch (error) {
    next(error);
  }
};

// GET single note
const getNoteById = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json(note);
  } catch (error) {
    next(error);
  }
};

// CREATE note
const createNote = async (req, res, next) => {
  try {
    const note = new Note({
      title: req.body.title.trim(),
      content: req.body.content.trim()
    });

    const savedNote = await note.save();

    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
};

// UPDATE note
const updateNote = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title.trim(),
        content: req.body.content.trim()
      },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json(note);
  } catch (error) {
    next(error);
  }
};

// DELETE note
const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json({
      message: "Note deleted successfully",
      note: note
    });
  } catch (error) {
    next(error);
  }
};

const searchNotes = async (req, res, next) => {
  try {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res.status(400).json({
        message: "Keyword is required"
      });
    }

    const notes = await Note.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { content: { $regex: keyword, $options: "i" } }
      ]
    });

    res.json(notes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
};