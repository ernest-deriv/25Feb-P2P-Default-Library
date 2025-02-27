import P2PBalance from "@/components/p2p/P2PBalance";
import P2PHeader from "@/components/p2p/P2PHeader";
import P2PNavigation from "@/components/p2p/P2PNavigation";
import P2PTradeFilters from "@/components/p2p/P2PTradeFilters";
import P2PTradeList from "@/components/p2p/P2PTradeList";
import { useState } from "react";
import { MobileNavigation } from "./components/MobileNavigation";
import { MobileFilters } from "./components/MobileFilters";

export default function BuySellPage() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [filters, setFilters] = useState({
    currency: "IDR",
    paymentMethod: undefined,
    nickname: undefined,
    status: undefined,
    sortBy: undefined,
  });

  return (
    <div className="min-h-screen bg-white pb-24 sm:pb-11 relative">
      <div className="-mx-6 sm:-mx-8 lg:-mx-32 px-6">
        <P2PHeader className="mx-6 px-4" />
      </div>
      <div className="mt-16 px-6 sm:px-8 lg:px-32">
        <div className="pt-4">
          <div className="hidden sm:flex items-center border-b justify-between h-16 pt-[1.75px]">
            <P2PNavigation className="h-14" />
            <P2PBalance className="h-16" />
          </div>
          <div className="sm:hidden pb-4">
            <P2PBalance mode={mode} onModeChange={setMode} />
          </div>
          <div className="mb-4 pt-4">
            <div className="sm:block hidden">
              <P2PTradeFilters
                mode={mode}
                onModeChange={setMode}
                onFilterChange={(newFilters) =>
                  setFilters({ ...filters, ...newFilters })
                }
              />
            </div>
            <MobileFilters filters={filters} setFilters={setFilters} />
          </div>
          <P2PTradeList mode={mode} filters={filters} />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}
