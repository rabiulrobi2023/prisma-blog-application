import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db.config";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
  });
  return result;
};

export const PostService = {
  createPost,
};
