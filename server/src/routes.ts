import { Router } from "express";

export const router = Router();

router.get("/skins/available", (req, res) => {
  res.send("5 skins available");
});

router.post("/skins/buy", (req, res) => {
  res.send("You bought a skin");
});

router.get("/skins/myskins", (req, res) => {
  res.send("You have 5 skins");
});

router.put("/skins/myskins/color", (req, res) => {
  res.send("You changed the color of your skin");
});

router.delete("/skins/myskins/delete/${id}", (req, res) => {
  res.send("You deleted a skin");
});
çç;
