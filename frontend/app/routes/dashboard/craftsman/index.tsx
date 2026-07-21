// app/routes/dashboard/index.tsx
import { Button } from "../../../components/ui/button";
import { LogOut } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";

import ProfileSection from "./components/ProfileSection";
import { useEffect } from "react";
const DashboardPage = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
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

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>error...</div>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/login");
  };

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

        {/* Centered Profile Section */}
        <div className="max-w-2xl mx-auto w-full">
          <ProfileSection user={user} />
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default DashboardPage;

//==============================================================================================================================
