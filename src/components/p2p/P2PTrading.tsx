import P2PBalance from "./P2PBalance";
import P2PHeader from "./P2PHeader";
import P2PNavigation from "./P2PNavigation";
import P2PTradeFilters from "./P2PTradeFilters";
import P2PTradeList from "./P2PTradeList";

import { useState } from "react";

export default function P2PTrading() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [filters, setFilters] = useState({
    currency: undefined,
    paymentMethod: undefined,
    nickname: undefined,
  });
  return (
    <div className="min-h-screen bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="pb-4 sm:pb-8">
          <P2PHeader />
        </div>
        <div className="hidden sm:flex items-center border-b justify-between h-16 pt-[1.75px]">
          <P2PNavigation className="h-14" />
          <P2PBalance className="h-16" />
        </div>
        <div className="sm:hidden px-4 pb-4">
          <P2PBalance mode={mode} onModeChange={setMode} />
        </div>
        <div className="hidden sm:block mb-4 pt-4">
          <P2PTradeFilters
            mode={mode}
            onModeChange={setMode}
            onFilterChange={(newFilters) =>
              setFilters({ ...filters, ...newFilters })
            }
          />
        </div>
        <P2PTradeList mode={mode} filters={filters} />
        <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t py-3">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <button className="flex flex-col items-center gap-1 text-red-500">
              <span className="text-sm">Buy/Sell</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <span className="text-sm">Orders</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <span className="text-sm">My ads</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <span className="text-sm">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
