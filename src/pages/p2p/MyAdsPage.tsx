import P2PBalance from "@/components/p2p/P2PBalance";
import P2PHeader from "@/components/p2p/P2PHeader";
import P2PNavigation from "@/components/p2p/P2PNavigation";
import WorkInProgress from "@/components/p2p/WorkInProgress";
import { Store } from "lucide-react";
import { MobileNavigation } from "./components/MobileNavigation";

export default function MyAdsPage() {
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
          <WorkInProgress
            title="My Ads Coming Soon"
            description="Create and manage your P2P advertisements. Set your rates, payment methods, and trading preferences."
            icon={<Store className="w-full h-full" />}
          />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}
