import Post from "../models/postModel.js"; 
import asyncRest from "express-async-handler";

const createPost = asyncRest(async (req, res) => {
  const { message, sender } = req.body;
  if (!message || !sender) {
    res.status(400);
    throw new Error("Required to enter message and sender.");
  }

  const newPost = await Post.create({
    message,
    sender,
  });
  res.json({
    success: true,
    post: newPost,
  });
});

const getPosts = asyncRest(async (req, res) => {
  const posts = await Post.find({});
  res.json({
    success: true,
    posts,
  });
});

const getPostById = asyncRest(async (req, res) => { 
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("Post not found.");
  }
  res.json({
    success: true,
    post,
  });
});

const getPostsBySender = asyncRest(async (req, res) => {
  const posts = await Post.find({ sender: req.params.sender });
  res.json({
    success: true,
    posts: posts,
  });
});

const updatePost = asyncRest(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("Post not found.");
  }
  post.message = req.body.message || post.message;
  post.sender = req.body.sender || post.sender;
  const updatedPost = await post.save();
  res.json({
    success: true,
    post: updatedPost,
  });
});

export { createPost, getPosts, getPostById, getPostsBySender, updatePost };
