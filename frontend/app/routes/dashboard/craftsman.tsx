// app/routes/dashboard/index.tsx
import DashboardHeader from "@/components/Dashboard-header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Search, X } from "lucide-react";
import { CraftsmanCard } from "@/components/Craftsman-card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DashboardPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:3000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.user;
    },
  });
  const { name, email } = data || {};
  const services = ["1", "2", "4"];
  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            "Your Craftsman Profile"
          </h1>
          <p className="text-muted-foreground">
            "Manage your profile and view client inquiries"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileSection user={{ name, email, services: ["2", "4", "5"] }} />

          <div className="bg-card rounded-xl border border-border p-6 shadow-xs">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Quick Stats
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Profile Views</p>
                <p className="text-2xl font-bold text-primary">24</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Inquiries</p>
                <p className="text-2xl font-bold text-primary">3</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="text-2xl font-bold text-primary">4.8/5</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default DashboardPage;
//==============================================================================================================================
const ProfileSection: React.FC<{
  user: { name: string; email: string; services: string[] };
}> = ({ user }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-xs">
      <h2 className="text-xl font-bold text-foreground mb-4">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="text-foreground font-medium">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="text-foreground font-medium">{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Services</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {user.services.map((service) => (
              <span
                key={service}
                className="text-xs bg-secondary text-foreground px-2 py-1 rounded"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
