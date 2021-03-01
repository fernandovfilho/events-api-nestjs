import * as dotenv from "dotenv";
dotenv.config();

export default {
  saltRounds: 10,
  jwtSecret: process.env.JWT_SECRET,
};
