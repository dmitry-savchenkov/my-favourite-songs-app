import express from "express";
import cors from "cors";
import boom from "express-boom";
import bodyParser from "body-parser";

// Controllers
import userController from "./controllers/userController.mjs";
import songsController from "./controllers/songsController.mjs";
import authController from "./controllers/authController.mjs";

const port = 4441;
const app = express();
app.use(cors());
app.use(boom());
app.use(bodyParser.json());

// Controller assignments
app.use("/auth", authController);
app.use("/users", userController);
app.use("/songs", songsController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
