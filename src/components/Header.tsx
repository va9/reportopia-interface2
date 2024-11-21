import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 border-b bg-white/50 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-10 w-64 bg-secondary border-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
              BS
            </div>
            <span className="text-sm font-medium">Brooklyn Simmons</span>
          </div>
        </div>
      </div>
    </header>
  );
};