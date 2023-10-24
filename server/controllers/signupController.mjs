import { readFileSync, writeFileSync } from "node:fs";
import express from "express";
import { userSchema } from "../schemas/user.schema.mjs";
const router = express.Router();

router.route("/").post((req, res) => {
  const users = JSON.parse(readFileSync("./fixtures/users.json", "utf8"));
  const user = users.find(
    (x) => x.credentials.email === req.body?.credentials?.email
  );

  if (user) {
    res.boom.badData("User already exists");
  } else {
    try {
      const newUser = userSchema.parse(req.body);
      newUser.id = String(users.length + 1);
      users.push(newUser);
      writeFileSync("./fixtures/users.json", JSON.stringify(users, null, 2));
      res.send(newUser);
    } catch (error) {
      res.boom.badData("Invalid data", error);
    }
  }
});

export default router;
