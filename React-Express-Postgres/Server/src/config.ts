import * as dotenv from "dotenv";
dotenv.config();
const POSTGRESS_PASSWORD = process.env.POSTGRESS_PASSWORD;
export {POSTGRESS_PASSWORD};