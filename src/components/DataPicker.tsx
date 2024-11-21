import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

interface DataPickerProps {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
  trigger?: React.ReactNode;
}

export const DataPicker = ({ title, options, onSelect, trigger }: DataPickerProps) => {
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add {title}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="mt-4 space-y-2 max-h-[300px] overflow-y-auto">
          {filteredOptions.map((option) => (
            <Button
              key={option}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                onSelect(option);
                setSearch("");
              }}
            >
              {option}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};