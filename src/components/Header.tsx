import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white border-b fixed top-0 z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-blue-600">
              Data source 1
            </Button>
            <Button variant="ghost" size="sm">
              Insync / Creative
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-10 w-64 bg-gray-50"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            K
          </Button>
          <Button variant="outline" size="sm">
            CM
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              BS
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Brooklyn Simmons</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};