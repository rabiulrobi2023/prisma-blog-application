import { Router } from "express";
import { UserContrller } from "./user.controllert";

const router = Router();
router.post("/create", UserContrller.createUser);
router.get("/all-users", UserContrller.getAllUsers);
router.get("/:id", UserContrller.getSingleUser);

export const UserRouter = router;
