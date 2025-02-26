import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Buy/Sell", path: "/p2p" },
  { name: "Orders", path: "/p2p/orders" },
  { name: "My ads", path: "/p2p/my-ads" },
  { name: "Profile", path: "/p2p/profile" },
];

export default function P2PNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the current path or default to /p2p
  const currentPath =
    navItems.find((item) => item.path === location.pathname)?.path || "/p2p";

  return (
    <nav>
      <Tabs value={currentPath} onValueChange={navigate} className="w-full">
        <TabsList className="h-auto p-0 bg-transparent border-none">
          {navItems.map((item) => (
            <TabsTrigger
              key={item.path}
              value={item.path}
              className="py-4 px-3 sm:px-6 text-base sm:text-xl data-[state=active]:border-b-2 data-[state=active]:border-coral data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-none rounded-none text-gray-400 hover:text-gray-900"
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
