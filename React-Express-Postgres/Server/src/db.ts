import { Pool } from "pg";
import { POSTGRESS_PASSWORD, AIVEN_POSTGRESS_PASSWORD } from "./config";

const isProduction = (process.env.NODE_ENV || 'development') === 'production';
console.log(isProduction)
// PostgreSQL configuration based on the environment
const pool = new Pool({
  user: isProduction ? "avnadmin" : "postgres", // Use avnadmin for Aiven in production
  password: isProduction ? AIVEN_POSTGRESS_PASSWORD : POSTGRESS_PASSWORD,
  host: isProduction
    ? "todo-app-pern-service-todo-app-pern.l.aivencloud.com" // Aiven host in production
    : "localhost",
  port: isProduction ? 23175 : 5432, // Use Aiven port in production and 5432 for local
  database: isProduction ? "perntodo" : "perntodo", // Aiven database in production
  ssl: isProduction ? { rejectUnauthorized: false } : false, // Enable SSL in production
});

export default pool;
