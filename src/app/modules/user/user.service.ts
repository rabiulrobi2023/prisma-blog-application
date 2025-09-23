import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db.config";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      picture: true,
      phone: true,
      status: true,
      posts: true,
    },
  });
  return result;
};

const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      picture: true,
      phone: true,
      status: true,
      posts: true,
    },
  });
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
};
