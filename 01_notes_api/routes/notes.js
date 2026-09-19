var express = require("express");
var router = express.Router();

let notes = [
    {
        id: 1,
        title: "Learn Node.js",
        content: "Revise Node and Express"
    },
    {
        id: 2,
        title: "Practice DSA",
        content: "Solve array questions"
    }
];

router.get("/", function(req, res) {
    res.json({
        message: (notes)
    });
});

router.post("/", function(req, res) {
    const newNote = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

router.get("/:id", function(req, res) {

    const id = parseInt(req.params.id);

    const note = notes.find(function(note) {
        return note.id === id;
    });

      if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }


    res.json(note);
});

router.put("/:id", function(req, res) {

    const id = parseInt(req.params.id);

    const note = notes.find(function(note) {
        return note.id === id;
    });

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    note.title = req.body.title;
    note.content = req.body.content;

    res.json(note);
});

router.delete("/:id", function(req, res) {

    const id = parseInt(req.params.id);

    const index = notes.findIndex(function(note) {
        return note.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    const deletedNote = notes.splice(index, 1);

    res.json({
        message: "Note deleted successfully",
        note: deletedNote[0]
    });
});
module.exports = router;