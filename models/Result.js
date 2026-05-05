import mongoose from "mongoose";

// Subject schema (nested structure)
const subjectSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
});

// Main result schema
const resultSchema = new mongoose.Schema(
    {
        seat: {
            type: String,
            required: true,
            minlength: 7,
            maxlength: 7
        },

        mname: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        division: {
            type: String,
            required: true
        },

        subjects: {
            type: [subjectSchema],   // 👈 important fix
            required: true
        },

        total: {
            type: Number,
            required: true
        },

        percentage: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: ["Pass", "Fail"],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Result = mongoose.model("Result", resultSchema);

export default Result;