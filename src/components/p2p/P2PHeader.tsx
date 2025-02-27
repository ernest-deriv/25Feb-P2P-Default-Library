import { ChevronLeft, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

export default function P2PHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 border-b bg-white z-[9999]">
      <div className="flex items-center justify-between h-16 px-6 sm:px-8 lg:px-32">
        <div className="flex items-center gap-2">
          <h1 className="font-medium text-2xl">Deriv P2P</h1>
        </div>
        <button className="hover:opacity-80">
          <Monitor className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
