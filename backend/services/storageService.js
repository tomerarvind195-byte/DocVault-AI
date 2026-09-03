const cloudinary = require("../config/cloudinary");

const uploadFile = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(
            filePath,
            {
                folder: "docvault-ai/documents",
                resource_type: "auto"
            }
        );

        return {
            url: result.secure_url,
            publicId: result.public_id,
            resourceType: result.resource_type
        };

    } catch (error) {
        console.error(
            "Cloudinary Upload Error:",
            error.message
        );

        throw new Error(
            "Failed to upload file to Cloudinary."
        );
    }
};


const deleteFile = async (
    publicId,
    resourceType = "image"
) => {
    try {
        const result = await cloudinary.uploader.destroy(
            publicId,
            {
                resource_type: resourceType
            }
        );

        return result;

    } catch (error) {
        console.error(
            "Cloudinary Delete Error:",
            error.message
        );

        throw new Error(
            "Failed to delete file from Cloudinary."
        );
    }
};


module.exports = {
    uploadFile,
    deleteFile
};