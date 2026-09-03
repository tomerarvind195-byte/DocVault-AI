const express = require("express");

const {
    uploadDocument,
    getDocuments,
    getDocumentById,
    deleteDocument
} = require("../controllers/documentController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Upload document
router.post(
    "/upload",
    protect,
    upload.single("document"),
    uploadDocument
);

// Get all documents
router.get(
    "/",
    protect,
    getDocuments
);

// Get single document
router.get(
    "/:id",
    protect,
    getDocumentById
);

// Delete document
router.delete(
    "/:id",
    protect,
    deleteDocument
);

module.exports = router;