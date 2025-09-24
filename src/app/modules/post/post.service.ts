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

const getAllPosts = async (
  page: number,
  limit: number,
  search?: string,
  isFeatured?: string,
  tags?: string[],
  sortBy?: string,
  sortOrder?: string
) => {
  const skip = (page - 1) * limit;
  const where: any = {
    AND: [
      search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      },
      isFeatured && { isFeatured: Boolean(isFeatured === "true") },
      tags && tags?.length > 0 && { tags: { hasEvery: tags } },
    ].filter(Boolean),
  };

  const result = await prisma.post.findMany({
    where,
    skip,
    take: limit,
    orderBy: {
      [sortBy as string]: sortOrder,
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
  const total = await prisma.post.count({ where });
  const totalPage = Math.ceil(total / limit);
  const metaData = {
    page,
    limit,
    total,
    totalPage,
  };
  console.log(metaData);
  return {
    data: result,
    metaData,
  };
};

const getSinglePost = async (id: number) => {
  const result = await prisma.$transaction(async (tx) => {
    await tx.post.update({
      where: {
        id: id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    const postdata = await tx.post.findUniqueOrThrow({
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
    return postdata;
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
