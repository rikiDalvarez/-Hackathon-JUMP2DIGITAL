import { Request, Response } from "express";
import database from "../../config/mysql.config";
import QUERY_SKINS from "../query/skins.query";

export const getAvailableSkins = async (req: Request, res: Response) => {
  database.query(QUERY_SKINS.SELECT_AVAILABLE_SKINS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ skins: results });
    }
  });
};
