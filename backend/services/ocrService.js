const { createWorker } = require("tesseract.js");

const extractTextFromImage = async (imagePath) => {
    let worker;

    try {
        console.log("Starting OCR...");

        worker = await createWorker("eng");

        const result = await worker.recognize(imagePath);

        const text = result.data.text;

        console.log("OCR completed successfully.");

        return text;

    } catch (error) {
        console.error("OCR Error:", error.message);
        throw new Error("Failed to extract text from document.");

    } finally {
        if (worker) {
            await worker.terminate();
        }
    }
};

module.exports = {
    extractTextFromImage
};