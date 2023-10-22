import mysql from "mysql2";
import "dotenv/config";
import config from "./config";

console.log(config);

const pool = mysql.createPool({
  host: config.HOST,
  port: config.DB_PORT,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.DATABASE,
});

export default pool;
