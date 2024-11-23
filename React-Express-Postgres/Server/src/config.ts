import * as dotenv from "dotenv";
dotenv.config();
const POSTGRESS_PASSWORD = process.env.POSTGRESS_PASSWORD;
const AIVEN_POSTGRESS_PASSWORD = process.env.AIVEN_POSTGRESS_PASSWORD;
export {POSTGRESS_PASSWORD, AIVEN_POSTGRESS_PASSWORD};