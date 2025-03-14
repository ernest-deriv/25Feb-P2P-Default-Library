import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterOptions } from "@/hooks/use-filter-options";

interface P2PTradeFiltersProps {
  mode: "buy" | "sell";
  onModeChange: (mode: "buy" | "sell") => void;
  onFilterChange: (filters: {
    currency?: string;
    paymentMethod?: string;
    nickname?: string;
    status?: string;
    sortBy?: string;
  }) => void;
}

export default function P2PTradeFilters({
  mode,
  onModeChange,
  onFilterChange,
}: P2PTradeFiltersProps) {
  const { currencies, paymentMethods } = useFilterOptions();

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
            <SelectTrigger className="bg-white ml-6 shadow-none px-2 w-[120px] gap-x-2">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Currencies</SelectItem>
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => onFilterChange({ paymentMethod: value })}
          >
            <SelectTrigger className="w-[160px] bg-white shadow-none">
              <SelectValue placeholder="Payment (All)" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            placeholder="Enter nickname"
            className="w-[160px] bg-white shadow-none"
            onChange={(e) => onFilterChange({ nickname: e.target.value })}
          />

          <Select onValueChange={(value) => onFilterChange({ sortBy: value })}>
            <SelectTrigger className="w-[160px] bg-white shadow-none">
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

          <Select onValueChange={(value) => onFilterChange({ status: value })}>
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
