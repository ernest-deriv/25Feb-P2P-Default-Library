import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500">
      <SearchX className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-medium mb-2">No results found</h3>
      <p>Try adjusting your search or filter criteria</p>
    </div>
  );
}
