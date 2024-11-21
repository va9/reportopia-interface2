import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataRow {
  id: string;
  publisher: string;
  pageViews: string;
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

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Publisher</TableHead>
            <TableHead>Page Views Valid</TableHead>
            <TableHead>Page Views Foreground</TableHead>
            <TableHead>Page Views Background</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.publisher}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{row.pageViews}</span>
                  <span className="text-green-500">{row.percentage}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{row.pageViews}</span>
                  <span className="text-green-500">{row.percentage}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span>{row.pageViews}</span>
                  <span className="text-green-500">{row.percentage}%</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};