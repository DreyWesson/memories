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
  console.log(post, "  :POSTS CREATE");
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

  try {
    let updatedPost = await Post.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.json(updatedPost);
  } catch (error) {
    console.log("UPDATE ERROR: ", error);
  }
};
const deletePost = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("There's no post with that ID");

  try {
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log("DELETE ERROR: ", error);
  }
};

const likePost = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("There's no post with that ID");

  try {
    const post = await Post.findById(id);
    let updatedPost = await Post.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      {
        new: true,
      }
    );
    res.json(updatedPost);
  } catch (error) {
    console.log("UPDATE ERROR: ", error);
  }
};

export { getPosts, createPost, updatePost, deletePost, likePost };
