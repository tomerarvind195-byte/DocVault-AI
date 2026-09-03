const express = require("express");

const {
    analyzeDocumentController
} = require("../controllers/aiController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
    "/analyze",
    protect,
    analyzeDocumentController
);

module.exports = router;