import P2PBalance from "./P2PBalance";
import P2PHeader from "./P2PHeader";
import P2PNavigation from "./P2PNavigation";
import P2PTradeFilters from "./P2PTradeFilters";
import P2PTradeList from "./P2PTradeList";
import WorkInProgress from "./WorkInProgress";
import { ClipboardList, Store, UserCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MobileFilters } from "@/pages/p2p/components/MobileFilters";
import { MobileNavigation } from "@/pages/p2p/components/MobileNavigation";

export default function P2PTrading() {
  const location = useLocation();
  const currentPath = location.pathname;
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
        <P2PHeader className="mx-6 px-4 flex" />
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
          {currentPath === "/p2p" ? (
            <P2PTradeList mode={mode} filters={filters} />
          ) : currentPath === "/p2p/orders" ? (
            <WorkInProgress
              title="Orders Coming Soon"
              description="Track all your P2P orders, view transaction history, and manage ongoing trades in one place."
              icon={<ClipboardList className="w-full h-full" />}
            />
          ) : currentPath === "/p2p/my-ads" ? (
            <WorkInProgress
              title="My Ads Coming Soon"
              description="Create and manage your P2P advertisements. Set your rates, payment methods, and trading preferences."
              icon={<Store className="w-full h-full" />}
            />
          ) : currentPath === "/p2p/profile" ? (
            <WorkInProgress
              title="Profile Coming Soon"
              description="Manage your P2P profile, view your trading statistics, and customize your preferences."
              icon={<UserCircle2 className="w-full h-full" />}
            />
          ) : (
            <P2PTradeList mode={mode} filters={filters} />
          )}
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}
