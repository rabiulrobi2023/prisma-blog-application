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

const getAllPosts = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  try {
    const result = await PostService.getAllPosts(page, limit);
    res.status(200).json({
      success: true,
      message: "Posts retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await PostService.getSinglePost(id);
    res.status(200).json({
      success: true,
      message: "Post retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatePostData = req.body;

  try {
    const result = await PostService.updatePost(id, updatePostData);
    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await PostService.deletePost(id);
    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
export const PostController = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
