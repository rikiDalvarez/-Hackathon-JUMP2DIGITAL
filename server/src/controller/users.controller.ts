import { Request, Response } from "express";
import database from "../../config/mysql.config";
import QUERY_USERS from "../query/users.query";

export const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log("reqBody:", req.body);
  database.query(QUERY_USERS.CREATE_USER, [email], (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json({ skin: results });
    }
  });
};
export const getUser = async (req: Request, res: Response) => {
  database.query(QUERY_USERS.SELECT_USER, (err, results) => {
    console.log("testing");
    console.log(results);
    console.log({ err });
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).send({ skins: results });
    }
  });
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
