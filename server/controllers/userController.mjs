import { readFileSync } from "node:fs";
import express from "express";
const router = express.Router();

router.route("/:id").get((req, res) => {
  const users = JSON.parse(readFileSync("./fixtures/users.json", "utf8"));
  const user = users.find((user) => user.id === req.params.id);

  if (!user) {
    res.boom.notFound("User not found");
  } else {
    res.send(user);
  }
});

export default router;
