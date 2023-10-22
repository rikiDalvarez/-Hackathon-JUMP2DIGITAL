import { Router } from "express";
import {
  getAvailableSkins,
  createSkin,
  getSkins,
} from "./controller/skins.controller";
import { createUser } from "./controller/users.controller";

export const router = Router();
router.post("/user", createUser);
router.get("/available", getAvailableSkins);
router.post("/available", createSkin);

router.post("/buy", (req, res) => {
  res.send("You bought a skin");
});

router.get("/myskins", (req, res) => {
  res.send("You have 5 skins");
});

router.put("/myskins/color", (req, res) => {
  res.send("You changed the color of your skin");
});

router.delete("/myskins/delete/:id", (req, res) => {
  console.log(req.params.id);
  res.send("You deleted a skin");
});
