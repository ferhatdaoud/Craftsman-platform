import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source.js";
import { User } from "../entities/User.js";
import * as bcrypt from "bcrypt";
const userRepository = AppDataSource.getRepository(User);
export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      if (!name || email || password) {
        res
          .status(400)
          .json({ message: "Name, email, and password are required" });
        return;
      }
      const emailExists = await userRepository.existsBy({ email });

      if (emailExists) {
        res.status(400).json({ msg: "user Already exists" });
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
        msg: "user created succesfully",
        user: {
          name: savedUser.name,
        },
      });
    } catch (error) {
      console.error("Registration error", error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
}
