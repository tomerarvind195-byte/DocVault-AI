const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        company: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        opportunityType: {
            type: String,
            enum: [
                "Job",
                "Internship",
                "Scholarship",
                "Hackathon",
                "Fellowship",
                "Other"
            ],
            default: "Job"
        },

        location: {
            type: String,
            default: "Remote"
        },

        applicationLink: {
            type: String,
            default: ""
        },

        deadline: {
            type: Date,
            default: null
        },

        requiredSkills: {
            type: [String],
            default: []
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Opportunity",
    opportunitySchema
);