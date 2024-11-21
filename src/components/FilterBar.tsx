import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const FilterBar = () => {
  const [isDimensionsOpen, setIsDimensionsOpen] = useState(true);
  const [isMetricsOpen, setIsMetricsOpen] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  return (
    <div className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm fixed top-16 z-40 border-b">
      <div className="max-w-[1600px] mx-auto space-y-4">
        <Collapsible open={isDimensionsOpen} onOpenChange={setIsDimensionsOpen}>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 min-w-24">Dimensions</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isDimensionsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2">
            <div className="flex items-center gap-4">
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
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={isMetricsOpen} onOpenChange={setIsMetricsOpen}>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 min-w-24">Metrics</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isMetricsOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2">
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
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 min-w-24">Filters</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isFiltersOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-2">
            <div className="flex items-center gap-4">
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
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};