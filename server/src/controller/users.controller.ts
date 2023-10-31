import { Request, Response } from "express";
import database from "../../config/mysql.config";
import QUERY_USERS from "../query/users.query";
import { userService } from "../dependencies";

export const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log("reqBody:", req.body);
  const newUser = await userService.createUser(email);
  // console.log("newUser:", newUser);
  res.status(200).send({ newUser });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  const user = await userService.getUser(id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  res.status(200).send({ user });
};

export const updateUser = async (req: Request, res: Response) => {
  database.query(QUERY_USERS.UPDATE_USER, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).send({ skins: results });
    }
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  database.query(QUERY_USERS.DELETE_USER, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).send({ skins: results });
    }
  });
};
