// app/routes/dashboard/index.tsx
import DashboardHeader from "@/components/Dashboard-header";
import { Button } from "../../components/ui/button";
import { LogOut, Plus } from "lucide-react"; 
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const DashboardPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const res = await axios.get("http://localhost:3000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.user;
    },
  });

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/login");
  };

  const { name, email } = data || {};
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Header Layout */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Your Craftsman Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your profile and view client inquiries
            </p>
          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full sm:w-auto text-destructive border-destructive/20 hover:bg-destructive/10 hover:text-destructive flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>

        {/* 💡 Centered max-width container so the single Profile Card looks balanced on large monitors */}
        <div className="max-w-2xl mx-auto w-full">
          <ProfileSection user={{ name, email, services: ["2", "4", "5"] }} />
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

  const handleAddServiceClick = () => {
    console.log("Add Service button clicked! Ready for your logic.");
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-xs w-full">
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
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Services</p>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleAddServiceClick}
              className="h-8 px-2 text-primary hover:bg-primary/10 hover:text-primary flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              Add Service
            </Button>
          </div>

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