import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import startupProfileRoutes from "./routes/startupProfile.js";

dotenv.config();
const app = express();


app.use(cors()); // Correct

app.use(express.json());


app.use("/", authRoutes);
app.use("/api/startup-profile", startupProfileRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
