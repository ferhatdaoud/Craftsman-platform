import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./config/data-source.js";
import authRoutes from "./routes/auth.routes.js";
import serviceRoutes from "./entities/category/category.routes/category.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
AppDataSource.initialize().then(() => {
  console.log("Database connected succesfully!");
  app.listen(PORT, () => {
    console.log(`server is runniing on port ${PORT}`);
  });
});

app.use("/api", authRoutes);
app.use("/api", serviceRoutes);
