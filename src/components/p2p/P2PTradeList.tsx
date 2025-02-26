import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import EmptyState from "./EmptyState";

import { tradersApi, type Trader } from "@/services/api";
import { mockTraders } from "@/lib/mock-data";
import { useEffect, useState } from "react";

interface P2PTradeListProps {
  mode: "buy" | "sell";
  filters: {
    currency?: string;
    paymentMethod?: string;
    nickname?: string;
    status?: string;
    sortBy?: string;
  };
}

export default function P2PTradeList({ mode, filters }: P2PTradeListProps) {
  const [traders, setTraders] = useState<Trader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTraders = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await tradersApi.getTraders(filters);
        setTraders(data);
      } catch (error) {
        console.error("Error fetching traders:", error);
        setError("Failed to load traders. Using fallback data.");
        setTraders(mockTraders); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchTraders();
  }, [filters]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral"></div>
        <p className="text-sm text-gray-500">Loading traders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          {error}
        </div>
      </div>
    );
  }

  let filteredTraders = traders.filter((trader) => {
    // Filter by mode (buy/sell)
    if (trader.type !== mode) {
      return false;
    }
    if (
      filters.currency &&
      filters.currency !== "all" &&
      trader.currency !== filters.currency
    ) {
      return false;
    }
    if (filters.paymentMethod && filters.paymentMethod !== "all") {
      const methodLower = filters.paymentMethod.toLowerCase();
      const traderMethods = trader.methods.map((m) => m.toLowerCase());

      if (methodLower === "bank") {
        // Check for any bank-related methods
        const hasBankMethod = traderMethods.some(
          (m) => m.includes("bank") || m.includes("transfer"),
        );
        if (!hasBankMethod) return false;
      } else if (methodLower === "other") {
        // Check for methods that are not bank-related
        const hasOtherMethod = traderMethods.some(
          (m) => !m.includes("bank") && !m.includes("transfer"),
        );
        if (!hasOtherMethod) return false;
      } else {
        // Direct match for specific methods
        const hasMethod = traderMethods.some((m) => m === methodLower);
        if (!hasMethod) return false;
      }
    }
    if (
      filters.nickname &&
      !trader.name.toLowerCase().includes(filters.nickname.toLowerCase())
    ) {
      return false;
    }
    if (filters.status === "following" && !trader.following) {
      return false;
    }
    if (filters.status === "online" && !trader.online) {
      return false;
    }
    return true;
  });

  // Sort traders based on selected criteria
  if (filters.sortBy) {
    filteredTraders.sort((a, b) => {
      switch (filters.sortBy) {
        case "rate":
          return b.rate - a.rate;
        case "completion":
          return b.completion - a.completion;
        case "orders":
          return b.orders - a.orders;
        default:
          return 0;
      }
    });
  }

  if (filteredTraders.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="pb-16 sm:pb-0">
      <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr_2fr] py-4 text-sm text-black border-b">
        <div className="font-semibold">Advertisers</div>
        <div className="font-semibold pl-4">Rates</div>
        <div className="font-semibold">Order limits</div>
        <div className="font-semibold">Payment methods</div>
      </div>

      <div className="space-y-4">
        {filteredTraders.map((trader) => (
          <div
            key={trader.id}
            className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_2fr] items-start sm:items-center py-4 gap-4 sm:gap-0 border border-[#DEE2E6] sm:border-0 sm:border-b rounded-lg sm:rounded-none mb-4 sm:mb-0 px-4 sm:px-0"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="bg-black text-white w-10 h-10 flex items-center justify-center">
                  {trader.name[0]}
                </Avatar>
                {trader.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">{trader.name}</span>
                  {trader.following && (
                    <span className="text-xs text-green-600 border border-green-600 rounded px-2">
                      Following
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>⭐ {trader.rating}</span>
                  <span>• {trader.orders} orders</span>
                  <span>• {trader.completion}% completion</span>
                </div>
              </div>
            </div>

            <div className="pl-4">
              <span className="font-semibold">
                {trader.currency}{" "}
                {trader.rate.toLocaleString("en-US", {
                  minimumFractionDigits: 4,
                })}
              </span>
            </div>

            <div className="space-y-1">
              <div>{trader.limits}</div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{trader.time}</span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-4 w-full">
              <div className="text-sm text-black">
                {trader.methods?.join(", ") || "No payment methods"}
              </div>
              <Button
                variant="ghost"
                className="w-24 bg-coral hover:bg-coral/90 text-white text-sm"
              >
                {trader.type === "buy" ? "Buy" : "Sell"} {trader.currency}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
