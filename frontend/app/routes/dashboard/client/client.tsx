// app/routes/dashboard/index.tsx
import DashboardHeader from "@/components/Dashboard-header";
import { Search, X } from "lucide-react";
import { CraftsmanCard } from "@/components/Craftsman-card";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const isCustomer = true;

  const mockUser = {
    name: "Alex Rivera",
    email: "alex@example.com",
    services: ["Plumbing", "Leak Repair", "Drain Cleaning"],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header (The Restaurant Infrastructure) */}
      <DashboardHeader />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isCustomer ? "Find Skilled Craftsmen" : "Your Craftsman Profile"}
          </h1>
          <p className="text-muted-foreground">
            {isCustomer
              ? "Browse and connect with professional service providers"
              : "Manage your profile and view client inquiries"}
          </p>
        </div>

        {/* -------------------------------------------------- */}
        {/* 🔓 CUSTOMER VIEW (Hidden for now since isCustomer = false) */}
        {/* -------------------------------------------------- */}
        {isCustomer && (
          <div>
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name, service, or location..."
                  className="pl-10 pr-4 py-2 w-full max-w-xl"
                  disabled // Disabled since this is a static placeholder
                />
              </div>
            </div>

            {/* Results Info */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium">3</span> of{" "}
                <span className="font-medium">3</span> craftsmen
              </p>
            </div>

            {/* Craftsmen Grid (Mock Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CraftsmanCard
                craftsman={{
                  id: "1",
                  name: "Alex Rivera",
                  title: "Master Plumber",
                  location: "Chicago",
                  services: ["Plumbing", "Leak Repair"],
                }}
              />
              <CraftsmanCard
                craftsman={{
                  id: "1",
                  name: "Alex Rivera",
                  title: "Master Plumber",
                  location: "Chicago",
                  services: ["Plumbing", "Leak Repair"],
                }}
              />
              <CraftsmanCard
                craftsman={{
                  id: "1",
                  name: "Alex Rivera",
                  title: "Master Plumber",
                  location: "Chicago",
                  services: ["Plumbing", "Leak Repair"],
                }}
              />
              <CraftsmanCard
                craftsman={{
                  id: "2",
                  name: "Jordan Smith",
                  title: "Electrician",
                  location: "New York",
                  services: ["Wiring", "Lighting"],
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
