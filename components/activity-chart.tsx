"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ActivityData {
  day: string
  commits: number
  prs: number
  issues: number
  contributions: number
}

interface ActivityChartProps {
  data: ActivityData[]
  className?: string
}

export function ActivityChart({ data, className }: ActivityChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <div className="animate-pulse-opacity">Loading chart...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full h-full">
      <Tabs defaultValue="commits" className="w-full">
        <TabsList className="mb-4 flex flex-wrap gap-1">
          <TabsTrigger value="commits" className="text-xs sm:text-sm">Commits</TabsTrigger>
          <TabsTrigger value="prs" className="text-xs sm:text-sm">Pull Requests</TabsTrigger>
          <TabsTrigger value="issues" className="text-xs sm:text-sm">Issues</TabsTrigger>
          <TabsTrigger value="contributions" className="text-xs sm:text-sm">Contributions</TabsTrigger>
        </TabsList>
        <TabsContent value="commits" className="h-[250px] w-full">
          <ResponsiveContainer width="99%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="commits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="prs" className="h-[250px] w-full">
          <ResponsiveContainer width="99%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="prs" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="issues" className="h-[250px] w-full">
          <ResponsiveContainer width="99%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="issues" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="contributions" className="h-[250px] w-full">
          <ResponsiveContainer width="99%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="contributions" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </div>
  )
}
