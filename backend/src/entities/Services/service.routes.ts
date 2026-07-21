import { Router } from "express";
import { authenticateToken } from "../../middlewares/auth.middleware.js";
import { ServiceController } from "../../controllers/service.controller.js";

const serviceRoutes = Router();

serviceRoutes.post(
  "/createService",
  authenticateToken,
  ServiceController.createService,
);
serviceRoutes.get(
  "/getServicesByUserId/:userId",
  authenticateToken,
  ServiceController.getServicesByUserId,
);
export default serviceRoutes;
