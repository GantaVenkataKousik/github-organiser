"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "12AM", value: 0.8 },
  { time: "1AM", value: 0.87 },
  { time: "2AM", value: 1.2 },
  { time: "3AM", value: 1.7 },
  { time: "4AM", value: 0.0 },
  { time: "5AM", value: 0.8 },
  { time: "6AM", value: 0.85 },
  { time: "7AM", value: 0.85 },
  { time: "8AM", value: 0.85 },
  { time: "9AM", value: 0.85 },
  { time: "10AM", value: 0.85 },
  { time: "11AM", value: 0.4 },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-white p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">{label}</div>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
            <div className="text-sm">Energy Consumption: {payload[0].value}</div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export function EnergyChart() {
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
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            domain={[0, 2.0]}
            tickCount={5}
            label={{ value: "kW Used", angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1acde4"
            strokeWidth={2}
            dot={{ r: 4, fill: "#1acde4", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#1acde4", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
