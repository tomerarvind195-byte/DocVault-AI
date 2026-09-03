const Document = require("../models/Document");
const {
    uploadFile,
    deleteFile
} = require("../services/storageService");


// ===============================
// Upload Document
// ===============================
const uploadDocument = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a document."
            });
        }

        const {
            documentType,
            expiryDate
        } = req.body;

        // Upload file to Cloudinary
        const uploadedFile = await uploadFile(
            req.file.path
        );

        // Save document information in MongoDB
        const document = await Document.create({
            user: req.user._id,
            name: req.file.originalname,
            documentType: documentType || "Other",
            fileUrl: uploadedFile.url,
            publicId: uploadedFile.publicId,
            resourceType: uploadedFile.resourceType,
            expiryDate: expiryDate || null
        });

        res.status(201).json({
            success: true,
            message: "Document uploaded successfully.",
            document
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// Get All Documents
// ===============================
const getDocuments = async (req, res, next) => {
    try {
        const documents = await Document.find({
            user: req.user._id
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: documents.length,
            documents
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// Get Single Document
// ===============================
const getDocumentById = async (req, res, next) => {
    try {
        const document = await Document.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!document) {
            return res.status(404).json({
                success: false,
                message: "Document not found."
            });
        }

        res.status(200).json({
            success: true,
            document
        });

    } catch (error) {
        next(error);
    }
};


// ===============================
// Delete Document
// ===============================
const deleteDocument = async (req, res, next) => {
    try {
        const document = await Document.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!document) {
            return res.status(404).json({
                success: false,
                message: "Document not found."
            });
        }

        // Delete file from Cloudinary
        if (document.publicId) {
            await deleteFile(
                document.publicId,
                document.resourceType || "image"
            );
        }

        // Delete document from MongoDB
        await Document.findByIdAndDelete(
            document._id
        );

        res.status(200).json({
            success: true,
            message: "Document deleted successfully."
        });

    } catch (error) {
        next(error);
    }
};


module.exports = {
    uploadDocument,
    getDocuments,
    getDocumentById,
    deleteDocument
};