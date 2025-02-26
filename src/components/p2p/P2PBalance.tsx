import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

interface P2PBalanceProps {
  mode?: "buy" | "sell";
  onModeChange?: (mode: "buy" | "sell") => void;
}

export default function P2PBalance({
  mode,
  onModeChange,
}: P2PBalanceProps = {}) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [open, setOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);

  const HelpContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Deriv P2P balance</h2>
      <div className="space-y-4">
        <h3 className="text-xl">Your Deriv P2P balance only contains:</h3>
        <ul className="space-y-4 list-disc pl-6">
          <li>Funds you receive from buying/selling USD on Deriv P2P.</li>
          <li>Deposits you made through non-reversible payment methods.</li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-lg flex gap-2">
          <div className="text-blue-500">ℹ</div>
          <div>
            <span className="font-medium">Note: </span>
            Funds deposited using reversible payment methods, like credit cards,
            Maestro, Diners Club, ZingPay, Skrill, Neteller, Ozow, and UPI QR,
            will not appear in your P2P balance.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex sm:flex-col sm:items-end justify-between items-center">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">P2P balance</span>
            {isDesktop ? (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                  <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[368px]">
                  <HelpContent />
                  <DialogFooter>
                    <Button
                      className="w-full bg-coral hover:bg-coral/90 text-white"
                      onClick={() => setOpen(false)}
                    >
                      OK
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger>
                  <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[480px]">
                  <HelpContent />
                  <SheetFooter className="mt-4">
                    <Button
                      className="w-full bg-coral hover:bg-coral/90 text-white"
                      onClick={() => setSheetOpen(false)}
                    >
                      OK
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            )}
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
