import "dotenv/config";
import config from "../config/config";
import cors from "cors";
import { errorHandler } from "./errorHandler";
import express, { NextFunction, Request, Response, Router } from "express";
import { Express } from "express-serve-static-core";
import { createServer, Server } from "http";
import { router } from "./routes";

// start an app with server and connection
export class Application {
  server: Server;
  connection: any;
  constructor(server: Server, connection: any) {
    this.server = server;
    this.connection = connection;
  }

  public stop() {
    this.server.close();
    this.connection.close();
  }
}

//start server for app or to test integration tests
export async function applicationStart() {
  const databaseName =
    config.NODE_ENV === "test" ? config.TEST_DATABASE : config.DATABASE;
  return startServer(databaseName || "");
}

// set up middlewares
export async function appSetup(app: Express, router: Router) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/skins", router);
  app.use(
    (
      error: Error,
      _request: Request,
      response: Response,
      next: NextFunction
    ) => {
      errorHandler(error, response, next);
    }
  );
}

async function startServer(databaseName: string) {
  //startDatabase
  const dataBaseDetails = await initDataBase(databaseName);
  //startServer
  const app = express();
  await appSetup(app, router);
  const httpServer = createServer(app);

  const server = httpServer.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}! 🍄 `);
  });

  return new Application(server, dataBaseDetails.connectionDetails, io);
}
