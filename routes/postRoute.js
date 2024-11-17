import express from "express";
import { createPost, getPosts, getPostById, getPostsBySender,updatePost } from "../controller/postController.js"; 

const router = express.Router();

router.route("/").post(createPost);

router.route("/").get(getPosts);
router.route("/:id").get(getPostById);
router.route("/sender/:sender").get(getPostsBySender);
router.route("/:id").put(updatePost);

export default router;
