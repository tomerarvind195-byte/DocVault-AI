const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const analyzeDocument = async (text) => {
    try {
        if (!text || !text.trim()) {
            throw new Error("No document text provided.");
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const prompt = `
You are DOCVAULT AI, an intelligent document analysis assistant.

Analyze the following document text and return:

1. Document Type
2. Important Information
3. Key Dates
4. Expiry Date
5. Short Summary
6. Important Warnings
7. Suggested Actions

Keep the answer clear and easy to understand.

Document Text:
${text}
`;

        const result = await model.generateContent(prompt);

        return result.response.text();

    } catch (error) {
        console.error("Gemini AI Error:", error.message);
        throw new Error("AI document analysis failed.");
    }
};

module.exports = {
    analyzeDocument
};