import mongoose from "mongoose";

const startupProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startupLogo: {
      type: String,
      default: null,
    },
    startupName: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    currentStage: {
      type: String,
      required: true,
    },
    pitchSummary: {
      type: String,
      maxlength: 500,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("StartupProfile", startupProfileSchema);
