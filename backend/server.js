import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import { connectDB } from "./config/db.js";
import morgan from "morgan";

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

app.get("/", (req, res) => {
  res.send("Hello from Memories API");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
