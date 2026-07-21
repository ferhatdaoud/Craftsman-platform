import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source.js";
import { Service } from "../entities/Services/index.js";
import { AuthenticatedRequest } from "../middlewares/auth.middleware.js";
export class ServiceController {
  static async createService(
    req: AuthenticatedRequest,
    res: Response,
  ): Promise<void> {
    try {
      const serviceRepository = AppDataSource.getRepository(Service);
      const { title, description, price, category } = req.body;
      if (!title || !price) {
        res.status(400).json({ message: "title and price required" });
        return;
      }
      const serviceExists = await serviceRepository.existsBy({ title });
      if (serviceExists) {
        res.status(400).json({ message: "Service already exists" });
        return;
      }
      const newService = serviceRepository.create({
        title,
        description,
        price,
        category,
        userId: req.user!.userId,
      });
      const savedService = await serviceRepository.save(newService);
      res.status(200).json({
        message: "service registered successfully",
        service: savedService,
      });
    } catch (error) {
      console.error("Registration error", error);

      res.status(500).json({ message: "internal server error" });
    }
  }
  static async getServicesByUserId(req: Request, res: Response): Promise<void> {
    try {
      const serviceRepository = AppDataSource.getRepository(Service);
      const { userId } = req.params;
      if (!userId) {
        res.status(400).json({ message: "id is required" });
        return;
      }
      const services = await serviceRepository.find({
        where: { userId: userId as string },
      });

      res.status(200).json({ services });
    } catch (error) {
      console.error("Get service by ID error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async updateService(
    req: AuthenticatedRequest,
    res: Response,
  ): Promise<void> {
    try {
    } catch (error) {
      console.error("update service by ID error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async deleteService(
    req: AuthenticatedRequest,
    res: Response,
  ): Promise<void> {}
}
