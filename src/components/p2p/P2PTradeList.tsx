import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import EmptyState from "./EmptyState";

interface Trader {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  orders: number;
  completion: number;
  following?: boolean;
  rate: number;
  limits: string;
  time: string;
  methods: string[];
  currency: string;
}

const traders: Trader[] = [
  {
    id: "1",
    name: "Mariana Rueda",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    rating: 4.3,
    orders: 43,
    completion: 98,
    following: true,
    rate: 14500.0,
    limits: "USD 10.00 - 100.00",
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "USD",
  },
  {
    id: "2",
    name: "Pavitra Yoganathan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    rating: 4.0,
    orders: 3,
    completion: 43,
    rate: 14600.0,
    limits: "USD 10.00 - 100.00",
    time: "15 min",
    methods: ["Bank transfer", "Neteller", "PayPal"],
    currency: "USD",
  },
  {
    id: "3",
    name: "Farid",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    rating: 0.0,
    orders: 0,
    completion: 0,
    following: true,
    rate: 12500.0,
    limits: "USD 10.00 - 100.00",
    time: "15 min",
    methods: ["Bank transfer", "Neteller"],
    currency: "USD",
  },
  {
    id: "4",
    name: "Lipika Sethi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    rating: 3.2,
    orders: 40,
    completion: 94,
    rate: 11354.0,
    limits: "EUR 10.00 - 100.00",
    time: "15 min",
    methods: ["Bank transfer", "PayPal"],
    currency: "EUR",
  },
  {
    id: "5",
    name: "Riddhi Deven",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    rating: 4.1,
    orders: 65,
    completion: 89,
    rate: 16444.0,
    limits: "IDR 10.00 - 100.00",
    time: "15 min",
    methods: ["Bank transfer"],
    currency: "IDR",
  },
  {
    id: "6",
    name: "Reeja Vasu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
    rating: 3.9,
    orders: 34,
    completion: 87,
    following: true,
    rate: 15322.0,
    limits: "USD 10.00 - 100.00",
    time: "15 min",
    methods: ["Neteller", "PayPal"],
    currency: "USD",
  },
  {
    id: "7",
    name: "Ameerul Hady",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
    rating: 2.8,
    orders: 54,
    completion: 99,
    rate: 12444.0,
    limits: "EUR 10.00 - 100.00",
    time: "15 min",
    methods: ["Bank transfer", "PayPal"],
    currency: "EUR",
  },
];

interface P2PTradeListProps {
  mode: "buy" | "sell";
  filters: {
    currency?: string;
    paymentMethod?: string;
    nickname?: string;
  };
}

export default function P2PTradeList({ mode, filters }: P2PTradeListProps) {
  const filteredTraders = traders.filter((trader) => {
    if (
      filters.currency &&
      filters.currency !== "all" &&
      trader.currency !== filters.currency
    ) {
      return false;
    }
    if (
      filters.paymentMethod &&
      filters.paymentMethod !== "all" &&
      !trader.methods.includes(filters.paymentMethod)
    ) {
      return false;
    }
    if (
      filters.nickname &&
      !trader.name.toLowerCase().includes(filters.nickname.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  if (filteredTraders.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
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
            className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_2fr] items-start sm:items-center py-4 border-b gap-4 sm:gap-0"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="bg-black text-white w-10 h-10 flex items-center justify-center">
                  {trader.name[0]}
                </Avatar>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
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

            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-gray-600">
                {trader.methods.join(", ")}
              </div>
              <Button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white">
                {mode === "buy" ? "Buy" : "Sell"} {trader.currency}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
