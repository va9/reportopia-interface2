import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";

const mockData = [
  {
    id: "1",
    publisher: "JumpFeed",
    pageViews: 100290,
    percentage: 99.40,
  },
  {
    id: "2",
    publisher: "SS - americanbenefitsa",
    pageViews: 100290,
    percentage: 99.40,
  },
  {
    id: "3",
    publisher: "CDK Global LLC",
    pageViews: 100290,
    percentage: 99.40,
  },
  {
    id: "4",
    publisher: "CBS Corporation",
    pageViews: 100290,
    percentage: 99.40,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Publisher Performance</h2>
            <div className="flex gap-4">
              <select className="px-4 py-2 rounded-lg border bg-white">
                <option>Daily Average</option>
                <option>Total</option>
              </select>
              <select className="px-4 py-2 rounded-lg border bg-white">
                <option>Sort by</option>
                <option>Page Views</option>
                <option>Percentage</option>
              </select>
            </div>
          </div>
          <DataTable data={mockData} />
        </div>
      </main>
    </div>
  );
};

export default Index;