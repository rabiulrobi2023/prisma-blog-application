import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserService.createUser(userData);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).send(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const result = await UserService.getSingleUser(id);
    console.log(result)
    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).send(error);
  }
};

export const UserContrller = {
  createUser,
  getAllUsers,
  getSingleUser
};
