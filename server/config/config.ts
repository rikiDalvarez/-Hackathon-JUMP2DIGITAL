import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../.env") });
//console.log(path.resolve(process.cwd(), ".env") )

// Interface to load env variables

interface ENV {
  NODE_ENV: string | undefined;
  DATABASE_ENV: string | undefined;
  PORT: number | undefined;
  SQL_URI: string | undefined;
  MYSQL_USER: string | undefined;
  MYSQL_PASSWORD: string | undefined;
  DATABASE: string | undefined;
  TEST_DATABASE: string | undefined;
  HOST: string | undefined;
}

interface Config {
  HOST: string | undefined;
  PORT: number | undefined;
  NODE_ENV: string | undefined;
  DATABASE_ENV: string | undefined;
  SQL_URI: string | undefined;
  MYSQL_USER: string | undefined;
  MYSQL_PASSWORD: string | undefined;
  DATABASE: string | undefined;
  TEST_DATABASE: string | undefined;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    // MONGO_URI_TEST: process.env.MONGO_URI_TEST,
    HOST: process.env.HOST,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_ENV: process.env.DATABASE_ENV,
    SQL_URI: process.env.SQL_URI,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE: process.env.DATABASE,
    TEST_DATABASE: process.env.TEST_DATABASE,
  };
};

const getSanitizedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
