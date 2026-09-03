const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendExpiryReminder = async ({
    to,
    documentName,
    expiryDate
}) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject: `DOCVAULT AI - Document Expiry Reminder`,
            html: `
                <div style="font-family: Arial, sans-serif;">
                    <h2>Document Expiry Reminder</h2>

                    <p>Hello,</p>

                    <p>
                        Your document
                        <strong>${documentName}</strong>
                        is approaching its expiry date.
                    </p>

                    <p>
                        <strong>Expiry Date:</strong>
                        ${new Date(expiryDate).toLocaleDateString()}
                    </p>

                    <p>
                        Please check your document and take
                        the necessary action before it expires.
                    </p>

                    <hr>

                    <p>
                        Regards,<br>
                        <strong>DOCVAULT AI</strong>
                    </p>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);

        console.log(
            "Expiry reminder email sent:",
            info.messageId
        );

        return info;

    } catch (error) {
        console.error(
            "Email sending failed:",
            error.message
        );

        throw new Error(
            "Failed to send expiry reminder email."
        );
    }
};

module.exports = {
    sendExpiryReminder
};