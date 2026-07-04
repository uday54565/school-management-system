import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    studentId: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
    },

    fatherName: {
        type: String,
        required: true,
    },

    motherName: {
        type: String,
        required: true,
    },

    class: {
        type: String,
        required: true,
    },

    section: {
        type: String,
        required: true,
    },

    rollNumber: {
        type: Number,
        required: true,
    },

    mobile: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    }

}, {

    timestamps: true

});

export const Student = mongoose.model(
    "Student",
    studentSchema
);