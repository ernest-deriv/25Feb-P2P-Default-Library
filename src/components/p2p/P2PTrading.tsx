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
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="pb-8">
          <P2PHeader />
        </div>
        <div className="flex items-center border-b justify-between h-16 pt-[1.75px]">
          <P2PNavigation className="h-14" />
          <P2PBalance className="h-16" />
        </div>
        <div className="mb-4 pt-4">
          <P2PTradeFilters
            mode={mode}
            onModeChange={setMode}
            onFilterChange={(newFilters) =>
              setFilters({ ...filters, ...newFilters })
            }
          />
        </div>
        <P2PTradeList mode={mode} filters={filters} />
      </div>
    </div>
  );
}
