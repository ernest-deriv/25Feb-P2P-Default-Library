import P2PBalance from "./P2PBalance";
import P2PHeader from "./P2PHeader";
import P2PNavigation from "./P2PNavigation";
import P2PTradeFilters from "./P2PTradeFilters";
import P2PTradeList from "./P2PTradeList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

import { useState } from "react";

export default function P2PTrading() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [filters, setFilters] = useState({
    currency: undefined,
    paymentMethod: undefined,
    nickname: undefined,
    status: undefined,
    sortBy: undefined,
  });
  return (
    <div className="min-h-screen bg-white pb-20 sm:pb-11 relative">
      <div className="-mx-6 sm:-mx-8 lg:-mx-32 px-6">
        <P2PHeader className="mx-6 px-4" />
      </div>
      <div className="px-6 sm:px-8 lg:px-32">
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
            <div className="grid sm:hidden grid-cols-2 gap-2 pb-2">
              <Select
                value={filters.currency}
                onValueChange={(value) =>
                  setFilters({ ...filters, currency: value })
                }
              >
                <SelectTrigger className="h-10 border-[#DEE2E6] rounded-lg bg-white w-full">
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
                value={filters.paymentMethod}
                onValueChange={(value) =>
                  setFilters({ ...filters, paymentMethod: value })
                }
              >
                <SelectTrigger className="h-10 border-[#DEE2E6] rounded-lg bg-white w-full">
                  <SelectValue placeholder="Payment method" />
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
                  <button className="h-10 border border-[#DEE2E6] rounded-lg flex items-center justify-center w-full">
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
                <SheetContent side="bottom" className="h-[240px]">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Search by nickname
                    </h3>
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
                  <button className="h-10 border border-[#DEE2E6] rounded-lg flex items-center justify-center w-full">
                    <Filter className="w-4 h-4" />
                  </button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[320px]">
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
                        <SelectItem value="rate">
                          Sort by: Exchange rate
                        </SelectItem>
                        <SelectItem value="completion">
                          Sort by: Completion rate
                        </SelectItem>
                        <SelectItem value="orders">
                          Sort by: Total orders
                        </SelectItem>
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
                        <SelectItem value="all">Filter by</SelectItem>
                        <SelectItem value="following">Following</SelectItem>
                        <SelectItem value="online">Online now</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <P2PTradeList mode={mode} filters={filters} />
          <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t py-3 z-[100] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-around items-center max-w-md mx-auto">
              <button className="flex items-center gap-1 flex-col-reverse">
                <div className="flex items-center gap-1 text-coral flex-col">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66667 3.33333L12 6.66667M12 6.66667H9.33333M12 6.66667V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.33333 12.6667L4 9.33333M4 9.33333H6.66667M4 9.33333V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-medium">Buy/Sell</span>
                </div>
              </button>
              <button className="flex flex-col items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 4H2.66667C2.29848 4 2 4.29848 2 4.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H13.3333C13.7015 14 14 13.7015 14 13.3333V4.66667C14 4.29848 13.7015 4 13.3333 4Z"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3333 2L8 4L4.66667 2"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-[#85898E] font-light">
                  Orders
                </span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2H14"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 6H14"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 10H14"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 14H14"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-[#85898E] font-light">
                  My ads
                </span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33333C4.62609 10 3.94781 10.281 3.44771 10.781C2.94762 11.2811 2.66667 11.9594 2.66667 12.6667V14"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7.33333C9.47276 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47276 2 8 2C6.52724 2 5.33334 3.19391 5.33334 4.66667C5.33334 6.13943 6.52724 7.33333 8 7.33333Z"
                    stroke="#85898E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-[#85898E] font-light">
                  Profile
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
