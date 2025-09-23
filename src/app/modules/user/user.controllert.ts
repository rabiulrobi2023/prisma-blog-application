import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await userService.createUser(userData);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserContrller = {
  createUser,
};
