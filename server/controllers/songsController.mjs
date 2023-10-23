import { readFileSync } from "node:fs";
import express from "express";
const router = express.Router();

router.route("/:userId").get((req, res) => {
  const songs = JSON.parse(readFileSync("./fixtures/userSongs.json", "utf8"));
  const userSongs = songs[req.params.userId];

  if (!userSongs) {
    res.boom.notFound("No songs found for given user ID");
  } else {
    res.send(userSongs);
  }
});

export default router;
