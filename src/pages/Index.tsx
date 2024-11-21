import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { FilterBar } from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const mockData = [
  {
    id: "JumpFeed",
    publisher: "JumpFeed (8CU8Q3SYV)",
    pageViews: "100.29k",
    percentage: 99.40,
  },
  {
    id: "americanbenefits",
    publisher: "SS - americanbenefitsa...",
    pageViews: "100.29k",
    percentage: 99.40,
  },
  {
    id: "cdk",
    publisher: "CDK Global LLC",
    pageViews: "100.29k",
    percentage: 99.40,
  },
  {
    id: "cbs",
    publisher: "CBS Corporation",
    pageViews: "100.29k",
    percentage: 99.40,
  },
  {
    id: "hbadx",
    publisher: "HB_AdX - Buying",
    pageViews: "100.29k",
    percentage: 99.40,
  },
  {
    id: "kobe",
    publisher: "Kobe Shimbun",
    pageViews: "100.29k",
    percentage: 99.40,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FilterBar />
      <main className="max-w-[1600px] mx-auto px-6 pt-48 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          <MetricCard
            title="No. of Environments"
            value="100%"
            percentage={7.2}
            subValue="72.00"
          />
          <MetricCard
            title="Revenue Contribution"
            value="50%"
            percentage={4.5}
            subValue="180.24k"
          />
          <MetricCard
            title="Traffic Contribution"
            value="30%"
            percentage={-2.3}
            subValue="499.69k"
          />
          <MetricCard
            title="Ad Clicks - Affected"
            value="70%"
            percentage={5.8}
            subValue="71.90k"
          />
          <MetricCard
            title="Ad Clicks - Affected"
            value="70%"
            percentage={5.8}
            subValue="71.90k"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex gap-4">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                Daily Average
              </Button>
              <Button variant="ghost" className="text-gray-500">
                Total
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="text-gray-600">
                Show Heatmap Map for
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                Sort by
              </Button>
            </div>
          </div>
          <DataTable data={mockData} />
        </div>
      </main>
    </div>
  );
};

export default Index;
