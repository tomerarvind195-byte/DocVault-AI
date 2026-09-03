const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const {
    isValidEmail,
    isValidPassword
} = require("../utils/validators");

// =======================
// REGISTER USER
// =======================
const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Name, email and password are required."
            });
        }

        // Validate email
        if (!isValidEmail(email)) {
            return res.status(400).json({
                message: "Invalid email address."
            });
        }

        // Validate password
        if (!isValidPassword(password)) {
            return res.status(400).json({
                message: "Password must be at least 6 characters."
            });
        }

        // Check existing user
        const existingUser = await User.findOne({
            email: email.toLowerCase()
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists."
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword
        });

        // Generate JWT
        const token = generateToken(user._id);

        res.status(201).json({
            message: "Registration successful.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        next(error);
    }
};


// =======================
// LOGIN USER
// =======================
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        // Find user
        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password."
            });
        }

        // Generate JWT
        const token = generateToken(user._id);

        res.status(200).json({
            message: "Login successful.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        next(error);
    }
};


module.exports = {
    register,
    login
};