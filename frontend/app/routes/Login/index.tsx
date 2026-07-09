import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Demo from "@/components/Demo";

export default function login() {
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

            {/* Form */}
            <form className="space-y-4">
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
