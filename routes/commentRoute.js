import express from "express";
import { createComment, getComments, getCommentById, getCommentsByPostID, updateComment} from "../controller/commentContrller.js"; 

const router = express.Router();

router.route("/").post(createComment);

router.route("/").get(getComments);

router.route("/:id").get(getCommentById);

router.route("/postID/:postID").get(getCommentsByPostID);

router.route("/:id").get(updateComment);


export default router;