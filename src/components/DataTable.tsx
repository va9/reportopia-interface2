import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DataRow {
  id: string;
  publisher: string;
  pageViews: number;
  percentage: number;
}

interface DataTableProps {
  data: DataRow[];
}

export const DataTable = ({ data }: DataTableProps) => {
  const [sortField, setSortField] = useState<keyof DataRow>("pageViews");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: keyof DataRow) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    const modifier = sortDirection === "asc" ? 1 : -1;
    
    if (typeof aValue === "string") {
      return aValue.localeCompare(bValue as string) * modifier;
    }
    return ((aValue as number) - (bValue as number)) * modifier;
  });

  return (
    <div className="overflow-x-auto rounded-lg border bg-white">
      <table className="data-table">
        <thead>
          <tr>
            <th
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => handleSort("publisher")}
            >
              <div className="flex items-center gap-2">
                Publisher
                {sortField === "publisher" && (
                  sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </th>
            <th
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => handleSort("pageViews")}
            >
              <div className="flex items-center gap-2">
                Page Views
                {sortField === "pageViews" && (
                  sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </th>
            <th
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => handleSort("percentage")}
            >
              <div className="flex items-center gap-2">
                Percentage
                {sortField === "percentage" && (
                  sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
              <td>{row.publisher}</td>
              <td>{row.pageViews.toLocaleString()}</td>
              <td className="text-green-500">{row.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};