import dotenv from "dotenv";

dotenv.config();

const envVers = () => {
  return {
    PORT: process.env.PORT,
  };
};
export const envVariable = envVers();
