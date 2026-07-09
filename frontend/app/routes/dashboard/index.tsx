import { CraftsmanCard } from "@/components/Craftsman-card";
import DashboardHeader from "@/components/Dashboard-header";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <DashboardHeader />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Find Skilled Craftsmen
          </h1>
          <p className="text-muted-foreground">
            Browse and connect with professional service providers
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, service, or location..."
              className="pl-10 pr-4 py-2 w-full max-w-xl"
            />
          </div>
        </div>

        {/* Customer View Results */}
        <div>
          {/* Results Info */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">3</span> of{" "}
              <span className="font-medium">3</span> craftsmen
            </p>
          </div>

          {/* Craftsmen Grid (Populated with your custom CraftsmanCard component) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* These assume you pass a structured object prop to your card component */}
            <CraftsmanCard
              craftsman={{
                id: "1",
                name: "Alex Rivera",
                title: "Master Plumber",
                services: ["Plumbing", "Leaking"],
                location: "Chicago",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
