const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// MongoDB connection
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const documentRoutes = require("./routes/documentRoutes");
const opportunityRoutes = require("./routes/opportunityRoutes");
const aiRoutes = require("./routes/aiRoutes");

// Error middleware
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads folder
app.use("/uploads", express.static("uploads"));

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "DOCVAULT AI Backend is running!"
    });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/ai", aiRoutes);

// 404 route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Error middleware
app.use(errorMiddleware);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});