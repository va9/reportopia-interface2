import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { DataPicker } from "./DataPicker";

const dimensionOptions = [
  "Publisher",
  "Country",
  "Device",
  "Browser",
  "Operating System",
  "Campaign",
  "Ad Format",
  "Ad Size",
  "Ad Position",
  "Domain",
];

const metricOptions = [
  "Page Views Valid",
  "Page Views - Foreground",
  "Page Views - Background",
  "Bounced Sessions",
  "Win Rate",
  "Revenue",
  "eCPM",
  "CTR",
  "Viewability",
  "Time on Site",
];

const filterOptions = [
  "Date Range",
  "Publisher",
  "Country",
  "Device",
  "Browser",
  "Operating System",
  "Campaign",
  "Ad Format",
  "Ad Size",
  "Ad Position",
];

export const FilterBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dimensions, setDimensions] = useState<string[]>(["Publisher"]);
  const [metrics, setMetrics] = useState<string[]>([
    "Page Views Valid",
    "Page Views - Foreground",
    "Page Views - Background",
  ]);
  const [filters, setFilters] = useState<string[]>([
    "18/08/2024 - 20/08/2024",
    "Publisher is Ryan Swartz & 4 more",
    "Page Views - Foreground is lesser than 100.29k",
  ]);

  const handleAddDimension = (dimension: string) => {
    if (!dimensions.includes(dimension)) {
      setDimensions([...dimensions, dimension]);
    }
  };

  const handleAddMetric = (metric: string) => {
    if (!metrics.includes(metric)) {
      setMetrics([...metrics, metric]);
    }
  };

  const handleAddFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const handleRemoveDimension = (dimension: string) => {
    setDimensions(dimensions.filter((d) => d !== dimension));
  };

  const handleRemoveMetric = (metric: string) => {
    setMetrics(metrics.filter((m) => m !== metric));
  };

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  return (
    <div className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm fixed top-16 z-40 border-b transition-all duration-300">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-600"
          >
            {isCollapsed ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronUp className="w-5 h-5" />
            )}
          </Button>
        </div>
        
        <div className={`space-y-4 overflow-hidden transition-all duration-300 ${
          isCollapsed ? 'h-0' : 'h-auto'
        }`}>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 min-w-24">Dimensions</span>
            <Button variant="outline" size="sm" className="text-blue-600">
              10
            </Button>
            {dimensions.map((dimension) => (
              <Button
                key={dimension}
                variant="outline"
                size="sm"
                className="text-gray-600"
                onClick={() => handleRemoveDimension(dimension)}
              >
                {dimension}
                <X className="w-4 h-4 ml-2" />
              </Button>
            ))}
            <DataPicker
              title="Dimension"
              options={dimensionOptions.filter((d) => !dimensions.includes(d))}
              onSelect={handleAddDimension}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 min-w-24">Metrics</span>
            <div className="flex flex-wrap gap-2">
              {metrics.map((metric) => (
                <Button
                  key={metric}
                  variant="outline"
                  size="sm"
                  className="text-gray-600"
                  onClick={() => handleRemoveMetric(metric)}
                >
                  {metric}
                  <X className="w-4 h-4 ml-2" />
                </Button>
              ))}
              <DataPicker
                title="Metric"
                options={metricOptions.filter((m) => !metrics.includes(m))}
                onSelect={handleAddMetric}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 min-w-24">Filters</span>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="text-blue-600"
                onClick={() => handleRemoveFilter(filter)}
              >
                {filter}
                <X className="w-4 h-4 ml-2" />
              </Button>
            ))}
            <DataPicker
              title="Filter"
              options={filterOptions.filter((f) => !filters.includes(f))}
              onSelect={handleAddFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};