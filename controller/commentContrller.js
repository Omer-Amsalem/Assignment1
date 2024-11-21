import Comment from "../models/commentModel.js"
import asyncRest from "express-async-handler";

const createComment = asyncRest(async (req,res) =>{
    const { message, sender, post } = req.body;
    if (!message || !sender || !post) {
      res.status(400);
      throw new Error("Required to enter message and sender.");
    }

    const newComment = await Comment.create({
        message,
        sender,
        post,
    });
    res.json({
        success: true,
        post: newComment,
    });
});

const getComments = asyncRest(async (req, res) => {
    const comments = await Comment.find({});
    res.json({
      success: true,
      comments,
    });
  });

  const getCommentById = asyncRest(async (req, res) => { 
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      res.status(404);
      throw new Error("Comment not found.");
    }
    res.json({
      success: true,
      comment,
    });
  });

  const getCommentsByPostID = asyncRest(async (req, res) =>{
    const commentsByPostID = await Comment.find({post:req.params.post});
    if(!commentsByPostID){
        res.status(404);
        throw new Error("Comments not found.");
    }
    res.json({
        success: true,
        comments: commentsByPostID,
      });
  });

  const updateComment = asyncRest(async (req, res) => {
    const comment = await Comment.findById(req.body.id);
    if (!comment) {
      res.status(404);
      throw new Error("Comment not found.");
    }

    comment.message = req.body.message || comment.message;
    comment.sender = req.body.sender || comment.sender;

    const updateComment = await comment.save();

    res.json({
      success: true,
       updateComment,
    });
  });
  


export {createComment, getComments, getCommentById, getCommentsByPostID, updateComment};