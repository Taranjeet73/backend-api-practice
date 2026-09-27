const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email"
        ]
    },

    phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: [
            /^[0-9]{10}$/,
            "Phone number must contain 10 digits"
        ]
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [16, "Age must be at least 16"],
        max: [60, "Age cannot be more than 60"]
    },

    course: {
        type: String,
        required: [true, "Course is required"],
        trim: true
    },

    semester: {
        type: Number,
        required: [true, "Semester is required"],
        min: [1, "Semester must be at least 1"],
        max: [8, "Semester cannot be more than 8"]
    },

    department: {
        type: String,
        required: [true, "Department is required"],
        trim: true
    },

    rollNumber: {
        type: String,
        required: [true, "Roll number is required"],
        unique: true,
        trim: true
    },

    address: {
        type: String,
        trim: true
    }

});

module.exports = mongoose.model("Student", studentSchema);