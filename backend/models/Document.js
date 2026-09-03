const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        documentType: {
            type: String,
            enum: [
                "Aadhaar",
                "PAN",
                "Passport",
                "Driving License",
                "Certificate",
                "Resume",
                "Other"
            ],
            default: "Other"
        },

        fileUrl: {
            type: String,
            required: true
        },

        publicId: {
            type: String,
            default: ""
        },

        extractedText: {
            type: String,
            default: ""
        },

        expiryDate: {
            type: Date,
            default: null
        },

        isExpired: {
            type: Boolean,
            default: false
        },

        aiAnalysis: {
            type: mongoose.Schema.Types.Mixed,
            default: null
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Document", documentSchema);