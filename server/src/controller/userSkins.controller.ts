import database from "../../config/mysql.config";
import QUERY_USERSKINS from "../query/userSkins.query";
import QUERY_SKINS from "../query/skins.query";
import { userSkinService } from "../dependencies";
import { skinService } from "../dependencies";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Skin } from "../types";
import { NextFunction } from "express";
import { Request, Response } from "express";

export const addSkin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id, skin_id } = req.body;
  if (!user_id || !skin_id) {
    return next(new Error("Invalid_body"));
  }
  try {
    const skin: Skin = await skinService.getSkinById(skin_id);
    if (!skin) {
      return next(new Error("Skin_not_found"));
    }
    const result = await userSkinService.buySkin(user_id, skin_id, skin.color);
    if (result) {
      res.status(200).json({ message: "congratulations, you bought a skin!" });
    } else {
      return next(new Error("Skin_not_found"));
    }
  } catch (error) {
    return next(error);
  }
};

export const getUserSkins = async (req: any, res: any) => {
  const { user_id } = req.body;
  const mySkins = await userSkinService.getMySkins(user_id);
  res.status(200).json({ skins: mySkins });
};

export const updateUserSkinColor = async (req: any, res: any) => {
  const { color, id } = req.body;
  const updatedSkin = await userSkinService.updateSkinColor(id, color);
  res.status(200).json({ skin: updatedSkin });
};

export const deleteUserSkin = async (req: any, res: any) => {
  //TODO - add error handler for invalid id
  const { id } = req.params;
  try {
    const deletedSkin = await new Promise((resolve, reject) => {
      database.query(QUERY_USERSKINS.DELETE_USER_SKIN, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    if (!deletedSkin) {
      throw new Error("internal error");
    }
    if (deletedSkin.affectedRows === 0) {
      throw new Error("Skin not found");
    }
    res.status(200).json("Skin deleted");
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const userSkins = async (req: any, res: any) => {
  database.query(QUERY_USERSKINS.SELECT_USERS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ skins: results });
    }
  });
};
