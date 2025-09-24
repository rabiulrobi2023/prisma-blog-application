import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const logingWithEmailAndPassword = async (req: Request, res: Response) => {
  const loginData = req.body;
  try {
    const result = await AuthService.logingWithEmailAndPassword(loginData);
    res.status(200).json({
      success: true,
      message: "User login successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
const logingWithGoogle = async (req: Request, res: Response) => {
  const loginData = req.body;
  try {
    const result = await AuthService.loginWithGoogle(loginData);
    res.status(200).json({
      success: true,
      message: "User login successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

export const AuthController = {
  logingWithEmailAndPassword,
  logingWithGoogle
};
