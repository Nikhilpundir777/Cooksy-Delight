import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import zod from "zod";
import { Router } from "express";
import { User } from "../models/model.js";  // Assuming the user schema is in model.js

const router = Router();

// Signup route
router.post("/signup", async (req, res) => {
    // Validate input data with Zod
    const signupSchema = zod.object({
        email: zod.string().email("Invalid email address").min(1, "Email is required"),
        password: zod.string().min(6, "Password must be at least 6 characters long")
    });

    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ errors: result.error.errors.map(e => e.message) });
    }

    const { email, password } = result.data;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Signin route
router.post("/signin", async (req, res) => {
    // Validate input data with Zod
    const signinSchema = zod.object({
        email: zod.string().email("Invalid email address").min(1, "Email is required"),
        password: zod.string().min(6, "Password is required")
    });

    const result = signinSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ errors: result.error.errors.map(e => e.message) });
    }

    const { email, password } = result.data;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.json({ message: "Signin successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Get user data (for authenticated routes)
router.get("/user", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
