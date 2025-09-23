import { Router } from "express";
import { UserRouter } from "../modules/user/user.routes";
import { PostRouter } from "../modules/post/post.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
