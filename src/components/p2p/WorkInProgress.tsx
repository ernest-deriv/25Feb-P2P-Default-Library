import { ReactNode } from "react";

interface WorkInProgressProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function WorkInProgress({
  title,
  description,
  icon,
}: WorkInProgressProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <div className="w-64 h-64 mb-8 text-gray-300">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 max-w-md">{description}</p>
    </div>
  );
}
