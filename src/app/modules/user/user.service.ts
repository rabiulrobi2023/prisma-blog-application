

import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db.config";


const createUser = async (payload:Prisma.UserCreateInput):Promise<User>=> {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};



export const userService = {
  createUser,
};
