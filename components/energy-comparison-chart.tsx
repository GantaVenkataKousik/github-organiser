"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    input: 84.2,
    avoided: 732.4,
  },
  {
    name: "Feb",
    input: 75.8,
    avoided: 658.3,
  },
  {
    name: "Mar",
    input: 92.5,
    avoided: 804.7,
  },
  {
    name: "Apr",
    input: 110.3,
    avoided: 958.2,
  },
  {
    name: "May",
    input: 125.6,
    avoided: 1092.4,
  },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-white p-3 shadow-sm">
        <p className="font-medium">{label}</p>
        <div className="mt-2 grid gap-1">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary-500"></div>
            <p className="text-sm">Input Energy: {payload[0].value.toFixed(2)} kWh</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
            <p className="text-sm">Avoided Energy: {payload[1].value.toFixed(2)} kWh</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export function EnergyComparisonChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#1a438e" />
          <YAxis yAxisId="right" orientation="right" stroke="#1acde4" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="input" name="Input Energy" fill="#1a438e" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="right" dataKey="avoided" name="Avoided Energy" fill="#1acde4" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
