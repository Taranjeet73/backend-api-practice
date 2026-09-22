var express = require("express");
var router = express.Router();

const Student = require("../models/Student");

router.post("/", async function (req, res) {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            message: "Student created successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating student",
            error: error.message
        });
    }
});

router.get("/", async function (req, res) {
    try {
        const students = await Student.find();

        res.status(200).json({
            message: "Students fetched successfully",
            students: students
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});

router.get("/:id", async function (req, res) {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student fetched successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching student",
            error: error.message
        });
    }
});

router.put("/:id", async function (req, res) {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            student: student
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating student",
            error: error.message
        });
    }
});

router.delete("/:id", async function (req, res) {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
});

module.exports = router;