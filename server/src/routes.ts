import { Router } from "express";

export const router = Router();

router.get("/available", (req, res) => {
  res.send("5 skins available");
});

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
