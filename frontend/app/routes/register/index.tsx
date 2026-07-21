import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Wrench } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { RegisterSchema, type RegisterInput } from "@/lib/validation";

interface RegisterSchema {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: RegisterInput) => {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        formData,
      );
      return response.data;
    },
    onSuccess: () => {
      navigate("/login?registered=true");
      reset();
    },
  });

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log("valid data submoiter salefy", data);
    mutate(data);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-secondary/20 to-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Link to="/">
          <div className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Wrench className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">Craftsman</span>
          </div>
        </Link>
        <Link to="/">
          <Button variant="ghost">Back to Home</Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
            {/* Title */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Get Started
              </h2>
              <p className="text-muted-foreground">
                Join our community of service providers
              </p>
            </div>

            {/* Form - connected to handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input {...register("name")} className="border p-2 block" />
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input {...register("email")} className="border p-2 block" />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  {...register("password")}
                  className="border p-2 block"
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="bg-blue-500 text-white p-2"
              >
                {isPending ? "Creating Account" : "Create Account"}
              </Button>
            </form>

            {/* Toggle */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
            </div>

            {/* Demo Note */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center mb-2">
                Demo Credentials
              </p>
              <p className="text-xs text-muted-foreground text-center">
                Email: demo@example.com
                <br />
                Password: demo123
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pb-8">
        <p className="text-sm text-muted-foreground">
          © 2024 Craftsman. All rights reserved.
        </p>
      </div>
    </div>
  );
}
