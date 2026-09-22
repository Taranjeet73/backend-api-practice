const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    rollNumber: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String
    }
});

module.exports = mongoose.model("Student", studentSchema);