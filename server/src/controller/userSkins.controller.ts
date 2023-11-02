import database from "../../config/mysql.config";
import QUERY_USERSKINS from "../query/userSkins.query";
import { userSkinService } from "../dependencies";
import { skinService } from "../dependencies";
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

export const getUserSkins = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.body;
  if (isNaN(user_id) || user_id < 0) {
    return next(new Error("invalid_Id"));
  }
  try {
    const mySkins = await userSkinService.getMySkins(user_id);
    res.status(200).json({ skins: mySkins });
  } catch (error) {
    return next(error);
  }
};

export const updateUserSkinColor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { color, id } = req.body;
  if (isNaN(id) || id < 0 || !color) {
    return next(new Error("invalid_Id"));
  }
  try {
    const updatedSkin = await userSkinService.updateSkinColor(id, color);
    if (!updatedSkin) {
      return next(new Error("skin_not_found"));
    }
    res.status(200).json({ message: "Skin color updated" });
  } catch (error: unknown) {
    return next(error);
  }
};

export const deleteUserSkin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (isNaN(Number(id)) || Number(id) < 0) {
    return next(new Error("invalid_Id"));
  }

  try {
    const skin = await userSkinService.deleteSkin(Number(id));
    if (!skin) {
      return next(new Error("skin_not_found"));
    }
    res.status(200).json({ message: "Skin deleted" });
  } catch (error: unknown) {
    return next(error);
  }
};

export const userSkins = async (req: Request, res: Response) => {
  database.query(QUERY_USERSKINS.SELECT_USERS, (err, results) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ skins: results });
    }
  });
};
