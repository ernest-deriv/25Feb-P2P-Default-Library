import { ChevronLeft, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

export default function P2PHeader() {
  return (
    <div className="border-b bg-white">
      <div className="flex items-center justify-between h-16 px-6 sm:px-8 lg:px-32">
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:opacity-80">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-medium text-2xl">Deriv P2P</h1>
        </div>
        <button className="hover:opacity-80">
          <Monitor className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
