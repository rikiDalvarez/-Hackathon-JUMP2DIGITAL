import { Router } from "express";
import {
  getAvailableSkins,
  createSkin,
  getSkins,
  getSkin,
} from "./controller/skins.controller";
import { createUser, getUser } from "./controller/users.controller";
import {
  addSkin,
  deleteUserSkin,
  getUserSkins,
  updateUserSkinColor,
  userSkins,
} from "./controller/userSkins.controller";

export const router = Router();

router.post("/user", createUser);
router.get("/user", getUser);
router.get("/available", getAvailableSkins);
router.post("/available", createSkin);
router.get("/userskins", userSkins);
router.post("/buy", addSkin);
router.get("/myskins", getUserSkins);
router.put("/myskins/color", updateUserSkinColor);
router.delete("/myskins/delete/:id", deleteUserSkin);
router.get("/getskin/:id", getSkin);
