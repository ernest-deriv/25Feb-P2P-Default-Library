import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

interface MobileFiltersProps {
  filters: {
    currency?: string;
    paymentMethod?: string;
    nickname?: string;
    status?: string;
    sortBy?: string;
  };
  setFilters: (filters: any) => void;
}

export function MobileFilters({ filters, setFilters }: MobileFiltersProps) {
  return (
    <div className="flex sm:hidden gap-2 pb-2 overflow-x-auto">
      <Select
        value={filters.currency}
        onValueChange={(value) => setFilters({ ...filters, currency: value })}
      >
        <SelectTrigger className="h-10 border-[#DEE2E6] rounded-lg bg-white space-x-2 shrink-0">
          <SelectValue placeholder="IDR" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Currencies</SelectItem>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="IDR">IDR</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.paymentMethod}
        onValueChange={(value) =>
          setFilters({ ...filters, paymentMethod: value })
        }
      >
        <SelectTrigger className="h-10 border-[#DEE2E6] rounded-lg bg-white w-[180px] shrink-0">
          <SelectValue placeholder="Payment (All)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Payment (All)</SelectItem>
          <SelectItem value="Bank transfer">Bank Transfer</SelectItem>
          <SelectItem value="PayPal">PayPal</SelectItem>
          <SelectItem value="Neteller">Neteller</SelectItem>
        </SelectContent>
      </Select>

      <Sheet>
        <SheetTrigger asChild>
          <button className="h-10 w-10 border border-[#DEE2E6] rounded-lg flex items-center justify-center shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 14L11.1 11.1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[240px] z-[99999]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Search by nickname</h3>
            <Input
              placeholder="Enter nickname"
              value={filters.nickname || ""}
              onChange={(e) =>
                setFilters({ ...filters, nickname: e.target.value })
              }
            />
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <button className="h-10 w-10 border border-[#DEE2E6] rounded-lg flex items-center justify-center shrink-0">
            <Filter className="w-4 h-4" />
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[320px] z-[99999]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sort and Filter</h3>
            <Select
              value={filters.sortBy}
              onValueChange={(value) =>
                setFilters({ ...filters, sortBy: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="rate">Sort by: Exchange rate</SelectItem>
                <SelectItem value="completion">
                  Sort by: Completion rate
                </SelectItem>
                <SelectItem value="orders">Sort by: Total orders</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filters.status}
              onValueChange={(value) =>
                setFilters({ ...filters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="following">Following</SelectItem>
                <SelectItem value="online">Online now</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
