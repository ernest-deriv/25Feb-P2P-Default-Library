import React from "react";
import { HelpCircle } from "lucide-react";

interface P2PBalanceProps {
  mode?: "buy" | "sell";
  onModeChange?: (mode: "buy" | "sell") => void;
}

export default function P2PBalance({
  mode,
  onModeChange,
}: P2PBalanceProps = {}) {
  return (
    <div>
      <div className="flex sm:flex-col sm:items-end justify-between items-center">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">P2P balance</span>
            <HelpCircle className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-lg font-medium">USD 1,234.56</span>
        </div>
        {mode && onModeChange && (
          <div className="sm:hidden inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => onModeChange("buy")}
              className={`px-4 py-1.5 rounded-md text-sm ${mode === "buy" ? "bg-white font-medium" : "text-gray-600"}`}
            >
              Buy
            </button>
            <button
              onClick={() => onModeChange("sell")}
              className={`px-4 py-1.5 rounded-md text-sm ${mode === "sell" ? "bg-white font-medium" : "text-gray-600"}`}
            >
              Sell
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
