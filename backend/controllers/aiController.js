const { analyzeDocument } = require("../services/aiService");

const analyzeDocumentController = async (req, res, next) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({
                success: false,
                message: "Document text is required."
            });
        }

        const analysis = await analyzeDocument(text);

        res.status(200).json({
            success: true,
            message: "Document analyzed successfully.",
            analysis
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    analyzeDocumentController
};