import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { router } from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Blog application is running");
});

app.use("/api/v1/", router);

export default app;
