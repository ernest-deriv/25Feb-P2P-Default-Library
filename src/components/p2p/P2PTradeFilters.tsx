import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface P2PTradeFiltersProps {
  mode: "buy" | "sell";
  onModeChange: (mode: "buy" | "sell") => void;
  onFilterChange: (filters: {
    currency?: string;
    paymentMethod?: string;
    nickname?: string;
  }) => void;
}

export default function P2PTradeFilters({
  mode,
  onModeChange,
  onFilterChange,
}: P2PTradeFiltersProps) {
  return (
    <div className="py-4 space-y-4">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => onModeChange("buy")}
            className={`px-8 py-1.5 rounded-md ${mode === "buy" ? "bg-white font-medium" : "text-gray-600"}`}
          >
            Buy
          </button>
          <button
            onClick={() => onModeChange("sell")}
            className={`px-8 py-1.5 rounded-md ${mode === "sell" ? "bg-white font-medium" : "text-gray-600"}`}
          >
            Sell
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select
            onValueChange={(value) => onFilterChange({ currency: value })}
          >
            <SelectTrigger className="w-[100px] bg-white ml-6 shadow-none">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Currencies</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="IDR">IDR</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => onFilterChange({ paymentMethod: value })}
          >
            <SelectTrigger className="w-[180px] bg-white shadow-none">
              <SelectValue placeholder="Payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Payment (All)</SelectItem>
              <SelectItem value="Bank transfer">Bank Transfer</SelectItem>
              <SelectItem value="PayPal">PayPal</SelectItem>
              <SelectItem value="Neteller">Neteller</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Enter nickname"
            className="w-[200px] bg-white shadow-none"
            onChange={(e) => onFilterChange({ nickname: e.target.value })}
          />

          <Select>
            <SelectTrigger className="w-[200px] bg-white shadow-none">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rate">Sort by: Exchange rate</SelectItem>
              <SelectItem value="completion">
                Sort by: Completion rate
              </SelectItem>
              <SelectItem value="orders">Sort by: Total orders</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[120px] bg-white shadow-none">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Filter by</SelectItem>
              <SelectItem value="following">Following</SelectItem>
              <SelectItem value="online">Online now</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
