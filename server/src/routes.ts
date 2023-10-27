import { Router } from "express";
import {
  getAvailableSkins,
  createSkin,
  getSkins,
  getSkin,
} from "./controller/skins.controller";
import { createUser, getUser, test } from "./controller/users.controller";
import {
  addSkin,
  deleteUserSkin,
  getUserSkins,
  updateUserSkinColor,
  userSkins,
} from "./controller/userSkins.controller";

export const router = Router();
//requested by pdf "prueba backend"
router.get("/skins/available", getAvailableSkins);
router.post("/skins/buy", addSkin);
router.get("/skins/myskins", getUserSkins);
router.put("/skins/color", updateUserSkinColor);
router.delete("/skins/delete/:id", deleteUserSkin);
router.get("/skin/getskin/:id", getSkin);

//routes to test easily api
router.post("/skins/user", createUser);
router.get("/skins/user", getUser);
router.post("/skins/available", createSkin);
router.post("/skins/buy", addSkin);
router.get("/skins/userskins", userSkins);
router.get("/test", test);
