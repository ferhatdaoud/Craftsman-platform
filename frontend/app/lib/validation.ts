import { z } from "zod";
export const RegisterSchema = z.object({
  name: z.string().min(3, "Name must at least 4 characters"),
  email: z.string().email("invalid email adress"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export type RegisterInput = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email("invalid emai adress"),
  password: z.string().min(6, "password must contain at least 6 characters"),
});

export type LoginInputs = z.infer<typeof LoginSchema>;

export const ServiceSchema = z.object({
  title: z.string().min(3, "title must be at least 3 characters"),
  price: z.number().positive("price must be a positive number"),
  description: z.string().optional().nullable(),
  category: z.string().optional(),
});

export type ServiceInputs = z.infer<typeof ServiceSchema>;

export type Service = {
  id: string;
  title: string;
  price: number;
  description?: string | null;
  category?: string;
};
