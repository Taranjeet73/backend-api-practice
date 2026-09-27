var express = require("express");
var router = express.Router();

const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");


// Create student
router.post("/", createStudent);

// Get all students
router.get("/", getStudents);

// Get one student
router.get("/:id", getStudent);

// Update student
router.put("/:id", updateStudent);

// Delete student
router.delete("/:id", deleteStudent);


module.exports = router;