import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}
export function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers["authorization"];

  const token =
    authHeader && typeof authHeader === "string"
      ? authHeader.split(" ")[1]
      : undefined;

  if (!token) {
    res.status(401).json({
      message: "Access denied. No token provided",
    });
    return;
  }
  try {
    const secret = process.env.JWT_SECRET || "fallback_secret";
    const decoded = jwt.verify(token, secret) as {
      userId: string;
      email: string;
    };

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
}
