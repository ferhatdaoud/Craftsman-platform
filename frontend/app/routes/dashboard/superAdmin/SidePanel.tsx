import { Button } from "@/components/ui/button";
import {
  FolderKanban,
  LineChart,
  LogOut,
  Settings,
  Wrench,
} from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";

const SidePanel = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-[#0d0d11] border-r border-[#1f1f24] flex flex-col justify-between p-6 shrink-0">
      <div className="space-y-8">
        {/* Brand Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-wider text-white">
              CRFTSMN<span className="text-[#10b981]">_OS</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#52525b]">
            <span>SUPERADMIN</span>
            <span>/</span>
            <span className="text-[#10b981]">L23423423420</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white bg-[#18181c] border border-[#27272a]/40 font-medium text-sm transition"
          >
            <FolderKanban className="w-4 h-4 text-[#10b981]" />
            Master Catalog
          </Link>
          <Link
            to="/admin/craftsmen"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#18181c]/50 transition font-medium text-sm"
          >
            <Wrench className="w-4 h-4" />
            Craftsmen Management
          </Link>
          <Link
            to="/admin/analytics"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#18181c]/50 transition font-medium text-sm"
          >
            <LineChart className="w-4 h-4" />
            Platform Analytics
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#18181c]/50 transition font-medium text-sm"
          >
            <Settings className="w-4 h-4" />
            System Settings
          </Link>
        </nav>
      </div>

      {/* System Admin Profile Bar (Bottom of Sidebar) */}
      <div className="border-t border-[#1f1f24] pt-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#18181c] border border-[#27272a] flex items-center justify-center font-bold text-xs text-white shrink-0">
            AD
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">
              System Admin
            </p>
            <p className="text-[10px] text-[#52525b] truncate font-mono">
              ADMIN@CRAFTSMAN.IO
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full text-[#71717a] hover:text-white hover:bg-destructive/10 justify-start gap-2 h-9 text-xs px-2"
        >
          <LogOut className="w-4 h-4" />
          Logout Session
        </Button>
      </div>
    </aside>
  );
};

export default SidePanel;
