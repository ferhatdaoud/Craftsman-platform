import { AuthController } from "../controllers/auth.controller.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/register", AuthController.register);
authRoutes.post("/login", AuthController.login);
authRoutes.get("/me", authenticateToken, AuthController.getMe);
export default authRoutes;
