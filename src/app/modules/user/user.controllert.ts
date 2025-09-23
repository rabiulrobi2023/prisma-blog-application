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
    res.status(400).send(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await UserService.getSingleUser(id);
    res.status(200).json({
      success: true,
      message: "User retrived successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updateUserData = req.body;

  try {
    const result = await UserService.updateUser(id, updateUserData);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const result = await UserService.deleteUser(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
