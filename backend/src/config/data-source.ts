import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAMW,
  synchronize: true,
  logging: false,
  entities: ["src/entities/user.entity.ts"],
  subscribers: [],
  migrations: [],
});

try {
  await AppDataSource.initialize();
  console.log("Data source has beec initilized!");
} catch (error) {
  console.error("Error during Data Source initialization");
}
