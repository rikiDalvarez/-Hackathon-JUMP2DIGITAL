import { Request, Response } from "express";
import database from "../../config/mysql.config";
import QUERY_SKINS from "../query/skins.query";
import { skinService } from "../dependencies";

export const createSkin = async (req: Request, res: Response) => {
  const { name, price, color, type, quantity } = req.body;
  console.log("reqBody:", req.body);
  database.query(
    QUERY_SKINS.CREATE_SKIN,
    [name, price, type, color, quantity],
    (err, results) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(201).json({ skin: results });
      }
    }
  );
};
export const getAvailableSkins = async (req: Request, res: Response) => {
  database.query(QUERY_SKINS.SELECT_AVAILABLE_SKINS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).send({ skins: results });
    }
  });
};

export const getSkins = async (req: Request, res: Response) => {
  database.query(QUERY_SKINS.SELECT_SKINS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).send({ skins: results });
    }
  });
};

export const getSkin = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("id:", id);
  const skin = await skinService.getSkinById(id);

  // database.query(QUERY_SKINS.SELECT_SKIN, [id], (err, results) => {
  //   console.log("testing");
  //   console.log(results);
  //   console.log({ err });
  //   if (err) {
  //     res.status(500).json({ message: err.message });
  //   } else {
  //     res.status(200).send({ skins: results });
  //   }
  // });
};
