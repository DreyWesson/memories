import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/users.routes.js";
// import privateRoutes from "./routes/test.private.js";
import { connectDB } from "./config/db.js";
import morgan from "morgan";
import errorResponse from "./middleware/error.middleware.js";
// import { shield } from "./middleware/auth.middleware.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
// app.use("/private", shield, privateRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Memories API");
});

// Error Handler
app.use(errorResponse);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
