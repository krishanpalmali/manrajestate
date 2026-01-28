import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/users.routes.js";
import buyRoute from "./routes/buy.routes.js";
import sellRoute from "./routes/Sell.routes.js";
import adminRoute from "./routes/admin.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import path from "path";

dotenv.config();

const app = express();
const __dirname = path.resolve();

// CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Uploads folder public
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================= API ROUTES (PEHLE) =================
app.use("/api/user", router);
app.use("/api/auth", authRouter);
app.use("/api/buy", buyRoute);
app.use("/api/sell", sellRoute);
app.use("/api/admin", adminRoute);
app.use("/api/property", propertyRoutes);

// ================= FRONTEND (LAST ME) =================
const clientPath = path.join(__dirname, "dist");
app.use(express.static(clientPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
