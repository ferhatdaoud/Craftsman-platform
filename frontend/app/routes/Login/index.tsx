import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Demo from "@/components/Demo";
import { zodResolver } from "@hookform/resolvers/zod";

import { Navigate, useNavigate, useSearchParams } from "react-router";
import z from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export const LoginSchema = z.object({
  email: z.string().email("invalid emai adress"),
  password: z.string().min(6, "password must contain at least 6 characters"),
});
type LoginInputs = z.infer<typeof LoginSchema>;
export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (loginData: LoginInputs) => {
      const responce = await axios.post(
        "http://localhost:3000/api/login",
        loginData,
      );
      return responce.data;
    },
    onSuccess: () => navigate("/dashboard"),
  });
  const onSubmit = async (data: LoginInputs) => {
    try {
    } catch (error) {}
  };
  const [searchParams] = useSearchParams();
  const hasRegistered = searchParams.get("registered") === "true";
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-secondary/20 to-background flex flex-col">
      <Header />
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
            {/* Title */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Welcome Back
              </h2>
              <p className="text-muted-foreground">
                Find skilled craftsmen in your area
              </p>
            </div>
            {hasRegistered && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-500 text-center">
                Registration successful! Please log in below.
              </div>
            )}
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input {...login("email")} />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10 mt-6"
              >
                Login
              </Button>
            </form>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>

            <Demo />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
