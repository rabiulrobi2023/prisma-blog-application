import { Router } from "express";
import { UserContrller } from "./user.controllert";

const router = Router();
router.post("/create", UserContrller.createUser);

export const UserRouter = router;
