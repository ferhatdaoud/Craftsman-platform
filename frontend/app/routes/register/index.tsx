import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Wrench } from "lucide-react";
import { Link } from "react-router"; // React Router Link component
import { z } from "zod";
import { useForm } from "react-hook-form";
export const RegisterSchema = z.object({
  name: z.string().min(3, "Name must at least 4 characters"),
  email: z.string().email("invalid email adress"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function RegisterPage() {
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

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full"
                  required
                />
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
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum 6 characters
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10 mt-6"
              >
                Create Account
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
