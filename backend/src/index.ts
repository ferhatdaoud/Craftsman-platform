import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/data-source.js";
import { Router } from "express";
const app = express();
const router = Router();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
AppDataSource.initialize().then(() => {
  console.log("Database connected succesfully!");
  app.listen(PORT, () => {
    console.log(`server is runniing on port ${PORT}`);
  });
});
