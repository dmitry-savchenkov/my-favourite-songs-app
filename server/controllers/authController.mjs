import { readFileSync } from "node:fs";
import crypto from "node:crypto";
import express from "express";
const router = express.Router();

router.route("/").post((req, res) => {
  const users = JSON.parse(readFileSync("./fixtures/users.json", "utf8"));
  const user = users.find((user) => user.credentials.email === req.body.email);

  if (!user || user.credentials.password !== req.body.password) {
    res.boom.unauthorized("Invalid credentials");
  } else {
    const token = crypto.randomBytes(16).toString("hex");
    res.send(token);
  }
});

export default router;
