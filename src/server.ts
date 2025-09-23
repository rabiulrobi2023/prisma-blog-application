import { Server } from "http";

import { envVariable } from "./app/config/env.config";
import app from "./app";
import { prisma } from "./app/config/db.config";

let server: Server;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connection successfull");

    server = app.listen(envVariable.PORT, () => {
      console.log(
        `Blog management server is running on port: ${envVariable.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};
(async () => {
  await startServer();
})();
