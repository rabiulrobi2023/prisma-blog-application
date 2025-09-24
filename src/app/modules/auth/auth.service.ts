import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db.config";

const logingWithEmailAndPassword = async (payload: {
  email: string;
  password: string;
}) => {
  const email = payload.email;
  const password = payload.password;
  
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw "User not found";
  }

  if (password != user.password) {
    throw "Incorrect password";
  }
  return user;
};

const loginWithGoogle = async (payload: Prisma.UserCreateInput) => {
  let user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    await prisma.user.create({
      data: payload,
    });
  }

  return user;
};

export const AuthService = {
  logingWithEmailAndPassword,
  loginWithGoogle,
};
