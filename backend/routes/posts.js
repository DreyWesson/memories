import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import { shield } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", shield, createPost);
router.patch("/:id", shield, updatePost);
router.delete("/:id", shield, deletePost);
router.patch("/:id/likePost", shield, likePost);

// COuld Implement getting a single post
router.get("/:id", getPost);
export default router;
