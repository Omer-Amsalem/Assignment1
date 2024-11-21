import express from "express";
import { createComment, getComments, getCommentById, getCommentsByPost, updateComment, deleteComment} from "../controller/commentContrller.js"; 

const router = express.Router();

router.route("/").post(createComment);

router.route("/").get(getComments);

router.route("/:id").get(getCommentById);

router.route("/post/:post").get(getCommentsByPost);

router.route("/:id").put(updateComment);

router.route("/:id").delete(deleteComment);


export default router;