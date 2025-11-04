import express from "express";
import StartupProfile from "../models/StartupProfile.js";

const router = express.Router();

// Create or update startup profile for a user (upsert)
router.post("/profile-settings", async (req, res) => {
  try {
    const { user, startupLogo, startupName, industry, currentStage, pitchSummary } = req.body;
    if (!user || !startupName || !industry || !currentStage) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    // Create or update for that user (by user field)
    const profile = await StartupProfile.findOneAndUpdate(
      { user },
      { startupLogo, startupName, industry, currentStage, pitchSummary, user },
      { new: true, upsert: true }
    );
    res.status(201).json({ profile });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get the startup profile for a user
router.get("/profile-settings/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await StartupProfile.findOne({ user: userId });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json({ profile });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
