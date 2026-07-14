import { AuthController } from "../controllers/auth.controller.js";
import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/register", AuthController.register);
authRoutes.post("/login", AuthController.login);
export default authRoutes;
