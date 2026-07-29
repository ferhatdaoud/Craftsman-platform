// frontend/app/routes/admin/index.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Wrench,
  Users,
  LogOut,
  Plus,
  Bolt,
  Droplets,
  Hammer,
  Thermometer,
  Download,
  AlertTriangle,
  FolderKanban,
  LineChart,
  Settings,
  CheckCircle2,
  Box,
  BarChart3,
} from "lucide-react";
import SidePanel from "./SidePanel";
import StatsRow from "./StatCard";
import StatCard from "./StatCard";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090b] text-[#a1a1aa] flex font-sans antialiased overflow-x-hidden">
      <SidePanel />
      {/* ==================================================================== */}
      {/* 2. MAIN CONTENT AREA */}
      {/* ==================================================================== */}
      <main className="flex-1 p-10 overflow-y-auto space-y-10">
        {/* Page Top Header with Title and Actions */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="space-y-1.5">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              Standardized Catalog.
            </h1>
            <p className="text-sm text-[#71717a] max-w-2xl leading-relaxed">
              Manage the master list of definitions. Craftsmen will cherry-pick
              these templates to build their public profiles. Changes here
              immediately reflect globally.
            </p>
          </div>

          {/* Top Actions Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              className="bg-[#131316] border-[#222227] text-white hover:bg-[#1c1c21] text-xs h-10 px-4 font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
            <Button className="bg-[#00b887] hover:bg-[#00b887]/90 text-black text-xs h-10 px-4 font-bold flex items-center gap-1.5 rounded-lg">
              <Plus className="w-4 h-4 stroke-[3px]" />
              New Category
            </Button>
          </div>
        </div>

        {/* Stats Row */}

        <StatCard />
        {/* 3. STANDARDIZED CATALOG DIRECTORY (The Main Cards Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Electrical */}
          <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-6 flex flex-col justify-between min-h-[320px] hover:border-[#27272a] transition">
            <div className="space-y-5">
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div className="bg-[#10b981]/5 p-2 rounded-lg border border-[#10b981]/15 text-[#10b981]">
                  <Bolt className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-white">Electrical</h3>
              </div>

              {/* Task Templates list */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase mb-3">
                  Standardized Tasks (Templates)
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Main Panel Upgrade", id: "104" },
                    { name: "EV Charger Installation", id: "105" },
                    { name: "Smart Home Retrofit", id: "106" },
                    { name: "Ceiling Fan Install", id: "107" },
                  ].map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center py-2.5 px-3 hover:bg-[#1c1c21]/30 rounded-lg transition group"
                    >
                      <span className="text-sm font-medium text-[#e4e4e7] group-hover:text-white transition">
                        {task.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#52525b]">
                        ID:{task.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Add task trigger */}
            <div className="border-t border-[#1f1f24] pt-4 mt-6">
              <button className="text-xs text-[#10b981] hover:text-[#10b981]/80 font-bold flex items-center gap-1.5 transition">
                <Plus className="w-4 h-4" />
                Add new task template...
              </button>
            </div>
          </div>

          {/* Card 2: HVAC Systems (With Active Highlighting) */}
          <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-6 flex flex-col justify-between min-h-[320px] hover:border-[#27272a] transition">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#f59e0b]/5 p-2 rounded-lg border border-[#f59e0b]/15 text-[#f59e0b]">
                  <Thermometer className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-white">HVAC Systems</h3>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase mb-3">
                  Standardized Tasks (Templates)
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2.5 px-3 hover:bg-[#1c1c21]/30 rounded-lg transition">
                    <span className="text-sm font-medium text-[#e4e4e7]">
                      System Diagnostic
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#52525b]">
                      ID:301
                    </span>
                  </div>

                  {/* ACTIVE/SELECTED ROW: Replicating the AC Coil Cleaning selected state */}
                  <div className="flex justify-between items-center py-2.5 px-3 bg-[#10b981]/5 border border-[#10b981]/25 rounded-lg transition">
                    <span className="text-sm font-bold text-white">
                      AC Coil Cleaning
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#10b981]/70">
                        ID:302
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2.5 px-3 hover:bg-[#1c1c21]/30 rounded-lg transition">
                    <span className="text-sm font-medium text-[#e4e4e7]">
                      Freon Recharge (per lb)
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#52525b]">
                      ID:303
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1f1f24] pt-4 mt-6">
              <button className="text-xs text-[#10b981] hover:text-[#10b981]/80 font-bold flex items-center gap-1.5 transition">
                <Plus className="w-4 h-4" />
                Add new task template...
              </button>
            </div>
          </div>

          {/* Card 3: Plumbing */}
          <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-6 flex flex-col justify-between min-h-[320px] hover:border-[#27272a] transition">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-[#3b82f6]/5 p-2 rounded-lg border border-[#3b82f6]/15 text-[#3b82f6]">
                  <Droplets className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-white">Plumbing</h3>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase mb-3">
                  Standardized Tasks (Templates)
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Tankless Water Heater", id: "201" },
                    { name: "Garbage Disposal Swap", id: "202" },
                    { name: "Main Line Snaking", id: "203" },
                  ].map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center py-2.5 px-3 hover:bg-[#1c1c21]/30 rounded-lg transition"
                    >
                      <span className="text-sm font-medium text-[#e4e4e7]">
                        {task.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#52525b]">
                        ID:{task.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#1f1f24] pt-4 mt-6">
              <button className="text-xs text-[#10b981] hover:text-[#10b981]/80 font-bold flex items-center gap-1.5 transition">
                <Plus className="w-4 h-4" />
                Add new task template...
              </button>
            </div>
          </div>

          {/* Card 4: Carpentry (Empty State Placeholder) */}
          <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-6 flex flex-col justify-between min-h-[320px] hover:border-[#27272a] transition">
            <div className="space-y-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="bg-[#a855f7]/5 p-2 rounded-lg border border-[#a855f7]/15 text-[#a855f7]">
                  <Hammer className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-lg text-white">Carpentry</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center py-6">
                <div className="border border-dashed border-[#26262b] rounded-xl w-full py-10 flex flex-col items-center justify-center gap-3 bg-[#18181c]/20">
                  <Box className="w-8 h-8 text-[#52525b]" />
                  <p className="text-xs font-semibold text-[#52525b]">
                    No tasks defined yet.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1f1f24] pt-4 mt-6">
              <button className="text-xs text-[#10b981] hover:text-[#10b981]/80 font-bold flex items-center gap-1.5 transition">
                <Plus className="w-4 h-4" />
                Create first template...
              </button>
            </div>
          </div>
        </div>

        {/* Tracked out centered Footer End signature */}
        <div className="text-center pt-8 border-t border-[#1f1f24]/50">
          <p className="text-[10px] font-bold font-mono tracking-[0.25em] text-[#52525b]">
            END OF CATALOG DIRECTORY
          </p>
        </div>
      </main>
    </div>
  );
}
