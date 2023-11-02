import express, { NextFunction, Request, Response } from "express";
import ip from "ip";
import cors from "cors";
import "dotenv/config";
import config from "../config/config";
import { router } from "./routes";
import { errorHandler } from "./Middleware/errorHandler";

const app = express();

const PORT = config.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);

// Middleware to handle errors
app.use(
  (
    error: Error,
    _request: Request,
    response: Response<any, Record<string, any>>,
    next: NextFunction
  ) => {
    errorHandler(error, response, next);
  }
);

app.listen(PORT, () => {
  console.log(`Server running at http://${ip.address()}:${PORT} 🍄`);
});
