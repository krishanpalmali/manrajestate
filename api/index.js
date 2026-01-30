import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

// routes
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/users.routes.js";
import buyRoute from "./routes/buy.routes.js";
import sellRoute from "./routes/Sell.routes.js";
import adminRoute from "./routes/admin.routes.js";
import propertyRoutes from "./routes/property.routes.js";

dotenv.config();

const app = express();

// __dirname fix for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===================== CORS ===================== */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/* ===================== MIDDLEWARE ===================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ===================== API ROUTES ===================== */
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/buy", buyRoute);
app.use("/api/sell", sellRoute);
app.use("/api/admin", adminRoute);
app.use("/api/property", propertyRoutes);

/* ===================== SERVE FRONTEND ===================== */
// root → vite-project/dist
const clientPath = path.join(__dirname, "..", "vite-project", "dist");
app.use(express.static(clientPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

/* ===================== ERROR HANDLER ===================== */
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* ===================== SERVER + DB ===================== */
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.error("MongoDB error ❌", err);
  });
