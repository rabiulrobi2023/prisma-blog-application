import { Router } from "express";
import { UserController } from "./user.controllert";

const router = Router();
router.post("/create", UserController.createUser);
router.get("/all", UserController.getAllUsers);
router.get("/:id", UserController.getSingleUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export const UserRouter = router;
