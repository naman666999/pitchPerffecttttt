import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["founder", "investor"], required: true },
    
    // Optional profile details filled post-login
    startupName: { type: String, default: null },
    industry: { type: String, default: null },
    currentStage: { type: String, default: null },
    startupLogo: { type: String, default: null }, // URL or file path string
    pitchSummary: { type: String, maxlength: 500, default: null }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
