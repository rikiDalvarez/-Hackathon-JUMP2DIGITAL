import mysql from "mysql2";
import "dotenv/config";
import config from "./config";

const pool = mysql.createPool({
  host: config.HOST,
  port: config.PORT,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.DATABASE,
  connectionLimit: 10,
});

export default pool;
