import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db.config";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          picture: true,
        },
      },
    },
  });
  return result;
};

const getAllPosts = async (page: number, limit: number, search:string) => {
  console.log(page, limit);
  const skip = (page - 1) * limit;
  const result = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    skip,
    take: limit,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
  return result;
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
  return result;
};
const updatePost = async (id: number, payload: Partial<Post>) => {
  const result = await prisma.post.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deletePost = async (id: number) => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return null;
};

export const PostService = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
