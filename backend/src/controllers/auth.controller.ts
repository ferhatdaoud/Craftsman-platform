import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source.js";
import dotenv from "dotenv";
dotenv.config();
import { User } from "../entities/User.js";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../middlewares/auth.middleware.js";
export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;
      const userRepository = AppDataSource.getRepository(User);
      if (!name || !email || !password) {
        res
          .status(400)
          .json({ message: "Name, email, and password are required" });
        return;
      }
      const emailExists = await userRepository.existsBy({ email });

      if (emailExists) {
        res.status(409).json({ message: "user Already exists" });
        return;
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = userRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      const savedUser = await userRepository.save(newUser);

      res.status(201).json({
        message: "user created succesfully",
        user: {
          name: savedUser.name,
          email: savedUser.email,
          userId: savedUser.id,
        },
      });
    } catch (error) {
      console.error("Registration error", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const userRepository = AppDataSource.getRepository(User);
      if (!email || !password) {
        res.status(400).json({ message: "email, password is required" });
        return;
      }
      const user = await userRepository.findOneBy({ email });
      if (!user) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET || "fallback",
        { expiresIn: "7d" },
      );
      res.status(200).json({
        message: "Logged in succesfully",
        user: { userId: user.id, name: user.name, email: user.email },
        token,
      });
    } catch (error) {
      console.error("Login error", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async getMe(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      const user = await AppDataSource.getRepository(User).findOneBy({
        id: req.user!.userId,
      });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json({
        user: { userId: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("getMe error", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
