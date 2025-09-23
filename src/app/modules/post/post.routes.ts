import { Router } from "express";
import { PostController } from "./post.controller";

const router = Router()
router.post("/create-post",PostController.createPost)

export const PostRouter = router;