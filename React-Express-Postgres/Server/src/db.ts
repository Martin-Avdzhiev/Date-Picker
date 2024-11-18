import { Pool } from "pg";
import { POSTGRESS_PASSWORD } from "./config";
const pool = new Pool({
    user: "postgres",
    password: POSTGRESS_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo",
  });
  
  export default pool;