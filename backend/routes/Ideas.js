import express from "express";
import Idea from "../models/Idea.js";
import authMiddleware from "../middleware/auth.js"; // Middleware to check if user is logged in

const router = express.Router();

// Create new idea
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text, enhancedText, imageUrl } = req.body;
    const newIdea = new Idea({
      user: req.user.id, // from auth middleware
      text,
      enhancedText,
      imageUrl,
    });
    const savedIdea = await newIdea.save();
    res.status(201).json(savedIdea);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all ideas of logged in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const ideas = await Idea.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
