import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const postData = req.body;
    const result = await PostService.createPost(postData);
    res.status(200).json({
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const PostController = {
  createPost,
};
