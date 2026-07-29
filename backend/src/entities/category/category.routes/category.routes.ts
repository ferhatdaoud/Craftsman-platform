import { Router } from "express";
import { authenticateToken } from "../../../middlewares/auth.middleware.js";
import { ServiceController } from "../../../controllers/service.controller.js";

const serviceRoutes = Router();

serviceRoutes.post(
  "/createCategory",
  authenticateToken,
  ServiceController.createService,
);
serviceRoutes.get(
  "/getcategoriesByUserId/:userId",
  authenticateToken,
  ServiceController.getcategoriesByUserId,
);
export default serviceRoutes;
 