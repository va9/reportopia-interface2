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
    <div className="metric-card">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-end gap-2 mb-1">
        <span className="text-2xl font-semibold">{value}</span>
        {subValue && (
          <span className="text-sm text-gray-500 mb-1">{subValue}</span>
        )}
      </div>
      <div className="flex items-center gap-1">
        {isPositive ? (
          <ArrowUpIcon className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownIcon className="w-4 h-4 text-red-500" />
        )}
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(percentage)}%
        </span>
      </div>
    </div>
  );
};