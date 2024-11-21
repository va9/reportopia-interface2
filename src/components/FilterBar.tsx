import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export const FilterBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
            <Button variant="outline" size="sm" className="text-gray-600">
              Publisher
              <X className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm" className="text-gray-600">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 min-w-24">Metrics</span>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="text-gray-600">
                Page Views Valid
                <X className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                Page Views - Foreground
                <X className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                Page Views - Background
                <X className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 opacity-50">
                Bounced Sessions
                <X className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 opacity-50">
                Win Rate
                <X className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600 min-w-24">Filters</span>
            <Button variant="outline" size="sm" className="text-gray-600">
              18/08/2024 - 20/08/2024
            </Button>
            <Button variant="outline" size="sm" className="text-blue-600">
              Publisher is Ryan Swartz & 4 more
              <X className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm" className="text-blue-600">
              Page Views - Foreground is lesser than 100.29k
              <X className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};