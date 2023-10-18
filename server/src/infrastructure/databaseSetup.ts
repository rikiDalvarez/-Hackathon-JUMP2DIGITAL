import { Sequelize } from "sequelize";
import { createConnection } from "mysql2/promise";
import config from "../../config/config";

type connectionConfig = {
  host: string;
  user: string;
  password: string;
};

export async function createSQLDatabase(
  dataBaseName: string,
  connectionConfig: connectionConfig
) {
  let connection;
  try {
    connection = await createConnection(connectionConfig);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dataBaseName}`);
    await connection.end();
  } catch (error) {
    console.error("Unable to create database:", error);
    throw error;
  } finally {
    connection?.end();
  }
}

export const createSequelizer = (
  database: string,
  user: string,
  password: string,
  host: string
) => {
  try {
    const connection = new Sequelize(database, user, password, {
      host: host,
      dialect: "mysql",
    });
    console.log("Connected to SQL DB");
    return connection;
  } catch (err) {
    console.log("DB conection error", err);
    throw err;
  }
};

export const testSQLConnection = async (sequelize: Sequelize) => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to MySQL database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    throw error;
  }
};

export const initDataBase = async (dataBaseName: string) => {
  const connectionConfig = {
    host: config.HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
  };
  await createSQLDatabase(dataBaseName, connectionConfig);
  const sequelize = createSequelizer(
    dataBaseName,
    config.MYSQL_USER,
    config.MYSQL_PASSWORD,
    config.HOST
  );
  await testSQLConnection(sequelize);
  return { connectionDetails: sequelize };
};
