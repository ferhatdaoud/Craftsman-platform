import { Layers, BarChart3, Wrench, AlertTriangle } from "lucide-react";
import React from "react";

const StatsRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stat 1: Total Categories */}
      <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-5 flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase">
            Total Categories
          </p>
          <p className="text-3xl font-extrabold text-white">14</p>
        </div>
        <div className="bg-[#1c1c21] p-2.5 rounded-lg border border-[#27272a] text-[#52525b]">
          <Layers className="w-5 h-5" />
        </div>
      </div>

      {/* Stat 2: Active Subcategories */}
      <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-5 flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase">
            Active Subcategories
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold text-white">286</p>
            <span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded">
              +12 this week
            </span>
          </div>
        </div>
        <div className="bg-[#1c1c21] p-2.5 rounded-lg border border-[#27272a] text-[#00b887] bg-[#00b887]/5">
          <BarChart3 className="w-5 h-5" />
        </div>
      </div>

      {/* Stat 3: Assigned by Craftsmen */}
      <div className="bg-[#131316] border border-[#1f1f24] rounded-xl p-5 flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-widest text-[#52525b] uppercase">
            Assigned by Craftsmen
          </p>
          <p className="text-3xl font-extrabold text-white">4,129</p>
        </div>
        <div className="bg-[#1c1c21] p-2.5 rounded-lg border border-[#27272a] text-[#f97316] bg-[#f97316]/5">
          <Wrench className="w-5 h-5" />
        </div>
      </div>

      {/* Stat 4: Orphaned Tasks (Low opacity Warning Style) */}
      <div className="bg-[#1a1114] border border-[#3f1c24] rounded-xl p-5 flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-widest text-[#ef4444] uppercase">
            Orphaned Tasks
          </p>
          <p className="text-3xl font-extrabold text-[#ef4444]">0</p>
        </div>
        <div className="bg-[#2a141a] p-2.5 rounded-lg border border-[#5c1d2c] text-[#ef4444]">
          <AlertTriangle className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
