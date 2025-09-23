import { Router } from "express";
import { UserRouter } from "../modules/user/user.routes";

export const router = Router();
type TModuleRoute = {
  path: string;
  route: Router;
}[];

const moduleRoutes: TModuleRoute = [
  {
    path: "/user",
    route: UserRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
