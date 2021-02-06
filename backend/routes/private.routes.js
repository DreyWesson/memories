import express from "express";
import { privateData } from "../controllers/private.js";
import { shield } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", privateData);

export default router;
