import { NextFunction, Response } from "express";

//middleware errorhandler
export const errorHandler = (
  error: Error,
  response: Response,
  next: NextFunction
) => {
  if (response.headersSent) {
    return next(error);
  }
  switch (error.message) {
    case "invalid_Id":
      return response.status(400).send({ Error: "Invalid id" });
    case "skin_not_found":
      return response.status(400).send({ Error: "No skin found" });
    case "Invalid_body":
      return response
        .status(400)
        .send({ Error: "Please provide a correct parameter for the fields" });
    case "skin_not_found":
    default:
      return response.status(500).json({ error: error.message });
  }
};
