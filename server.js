import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
const { Hooks } = require("vercel");

module.exports = {
  postDeploy: async () => {
    await Hooks.run("npm start");
  },
};

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800);
