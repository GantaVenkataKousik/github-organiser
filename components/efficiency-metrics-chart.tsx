"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from "recharts"

// Sample data for efficiency metrics
const efficiencyData = [
  { name: "Device A", energy: 85, cost: 78, carbon: 92 },
  { name: "Device B", energy: 75, cost: 82, carbon: 88 },
  { name: "Device C", energy: 92, cost: 90, carbon: 95 },
  { name: "Device D", energy: 68, cost: 72, carbon: 75 },
  { name: "Device E", energy: 80, cost: 85, carbon: 82 },
  { name: "Device F", energy: 88, cost: 76, carbon: 90 },
]

export function EfficiencyMetricsChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={efficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="energy" fill="#1a438e" name="Energy Efficiency" />
          <Bar dataKey="cost" fill="#10b981" name="Cost Efficiency" />
          <Bar dataKey="carbon" fill="#6366f1" name="Carbon Efficiency" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
