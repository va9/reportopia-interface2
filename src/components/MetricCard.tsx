import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  percentage: number;
  subValue?: string;
}

export const MetricCard = ({ title, value, percentage, subValue }: MetricCardProps) => {
  const isPositive = percentage >= 0;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        {subValue && (
          <span className="text-sm text-blue-600">{subValue}</span>
        )}
      </div>
    </div>
  );
};