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
      return response.status(404).send({ Error: "Skin not found" });
    case "EmailConflictError":
      return response.status(409).send({ Error: "Email already exists" });
    case "EmailInvalidError":
      return response.status(400).send({ Error: "Email is invalid" });
    case "CreatingPlayerError":
      return response.status(409).send({ Error: "Couldn't create the player" });
    case "PlayerNotFound":
      return response.status(404).send({ Error: "Player(s) not found" });
    case "EmailNotExists":
      return response.status(401).send({ Error: "Email doesn't exist" });
    case "AddingGameError":
      return response.status(500).send({ Error: "Error playing game" });
    case "DeletionError":
      return response.status(500).send({ Error: "Error during deletion" });
    case "changeNameError":
      return response.status(500).send({ Error: "Error during change name" });
    case "GettingMeanValueError":
      return response
        .status(500)
        .send({ Error: "Error getting success rate average" });
    case "jwt expired":
      return response.status(401).send({ Error: "Authentication required" });
    case "NoToken":
      return response.status(401).send({ Error: "No token" });
    default:
      return response.status(500).json({ error: error.message });
  }
};
