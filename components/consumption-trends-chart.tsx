"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from "recharts"

// Sample data for consumption trends
const consumptionData = [
  { month: "Jan", consumption: 320, baseline: 380, target: 350 },
  { month: "Feb", consumption: 300, baseline: 380, target: 340 },
  { month: "Mar", consumption: 310, baseline: 380, target: 330 },
  { month: "Apr", consumption: 290, baseline: 380, target: 320 },
  { month: "May", consumption: 270, baseline: 380, target: 310 },
  { month: "Jun", consumption: 250, baseline: 380, target: 300 },
  { month: "Jul", consumption: 280, baseline: 380, target: 290 },
  { month: "Aug", consumption: 260, baseline: 380, target: 280 },
  { month: "Sep", consumption: 240, baseline: 380, target: 270 },
  { month: "Oct", consumption: 230, baseline: 380, target: 260 },
  { month: "Nov", consumption: 220, baseline: 380, target: 250 },
  { month: "Dec", consumption: 210, baseline: 380, target: 240 },
]

export function ConsumptionTrendsChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={consumptionData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="consumption"
            stroke="#1a438e"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Actual Consumption"
          />
          <Line
            type="monotone"
            dataKey="baseline"
            stroke="#9ca3af"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Baseline"
          />
          <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} name="Target" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
