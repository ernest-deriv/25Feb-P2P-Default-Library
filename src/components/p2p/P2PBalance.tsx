import React from "react";
import { HelpCircle } from "lucide-react";

export default function P2PBalance() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-end">
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-600">P2P balance</span>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
        <span className="text-lg font-medium">USD 1,234.56</span>
      </div>
    </div>
  );
}
