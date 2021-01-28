import mongoose from "mongoose";
import Post from "../models/postSchema.js";

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updatePost = async (req, res, next) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("There's no post with that ID");

  const updatedPost = Post.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatedPost);
};

export { getPosts, createPost, updatePost };
