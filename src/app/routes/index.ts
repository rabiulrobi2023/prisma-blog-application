import { Router } from "express";
import { UserRouter } from "../modules/user/user.routes";
import { PostRouter } from "../modules/post/post.routes";
import { AuthRouter } from "../modules/auth/auth.rotues";

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
  {
    path: "/post",
    route: PostRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
