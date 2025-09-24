import { Router } from "express";

import { AuthController } from "./auth.controller";

const router = Router();
router.post("/login", AuthController.logingWithEmailAndPassword);
router.post("/google", AuthController.logingWithGoogle);

export const AuthRouter = router;
