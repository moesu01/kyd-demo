import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

interface ChartData {
  date: string;
  value: number;
}

const WEEKLY_DATA: ChartData[] = [
  { date: "Apr 27", value: 78.2 },
  { date: "Apr 28", value: 54.25 },
  { date: "Apr 29", value: 49.1 },
  { date: "Apr 30", value: 64.4 },
  { date: "May 1", value: 48.2 },
  { date: "Today", value: 98.8 },
];

const MONTHLY_DATA: ChartData[] = [
  { date: "Week 1", value: 234.5 },
  { date: "Week 2", value: 189.3 },
  { date: "Week 3", value: 312.7 },
  { date: "Week 4", value: 267.9 },
];

const YEARLY_DATA: ChartData[] = [
  { date: "Jan", value: 1245.6 },
  { date: "Feb", value: 1389.2 },
  { date: "Mar", value: 1156.8 },
  { date: "Apr", value: 1423.4 },
  { date: "May", value: 1567.9 },
];

type TimeRange = 'week' | 'month' | 'year';

interface TimeToggleProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

function TimeToggle({ selectedRange, onRangeChange }: TimeToggleProps) {
  const ranges: { key: TimeRange; label: string }[] = [
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' },
    { key: 'year', label: 'Year' },
  ];

  return (
    <div className="flex gap-1 bg-neutral-200 rounded-lg p-1">
      {ranges.map((range) => (
        <button
          key={range.key}
          onClick={() => onRangeChange(range.key)}
          className={`px-3 py-1.5 text-sm font-regular rounded-md transition-all ${
            selectedRange === range.key
              ? 'bg-white font-medium text-neutral-700 shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}


export function KYDRewardsChart() {
  const [selectedRange, setSelectedRange] = useState<TimeRange>('week');

  const getData = () => {
    switch (selectedRange) {
      case 'week':
        return WEEKLY_DATA;
      case 'month':
        return MONTHLY_DATA;
      case 'year':
        return YEARLY_DATA;
      default:
        return WEEKLY_DATA;
    }
  };

  const data = getData();

  return (
    <div className="bg-transparent p-0 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h3 className="font-inter font-medium text-[#333333] text-[26px] sm:text-[30px] mb-3 sm:mb-0 leading-[1.2] tracking-[-3%]">
          KYD Rewards Per Day
        </h3>
        <TimeToggle selectedRange={selectedRange} onRangeChange={setSelectedRange} />
      </div>
      
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(0,0,0,0.1)" 
              vertical={true}
              horizontal={true}
            />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'rgba(57,57,57,0.75)' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'rgba(57,57,57,0.75)' }}
              domain={[0, 'dataMax + 20']}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                fontSize: '14px',
                fontFamily: 'Geist Mono, sans-serif'
              }}
              labelStyle={{
                color: '#333333',
                fontWeight: '600',
                marginBottom: '4px'
              }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, 'KYD Rewards']}
              labelFormatter={(label: string) => `Date: ${label}`}
            />
            <Bar 
              dataKey="value" 
              fill="#64bf54"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
