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
app.use(cors({ origin: true, credentials: true }));

// Middlewares
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// API routes
app.use("/api/user", router);
app.use("/api/auth", authRouter);
app.use("/api/buy", buyRoute);
app.use("/api/sell", sellRoute);
app.use("/api/admin", adminRoute);
app.use("/api/property", propertyRoutes);

// ================= FRONTEND SERVE (RENDER READY) =================
const clientPath = path.join(__dirname, "vite project", "dist");

app.use(express.static(clientPath));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    statusCode: err.statusCode || 500,
    message: err.message || "Internal server error",
  });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
