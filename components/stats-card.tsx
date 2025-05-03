import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  description?: string
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  className?: string
}

export function StatsCard({ title, value, icon, description, trend, trendValue, className }: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover-effect border border-border/50 card-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-muted/30 to-transparent">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="rounded-full bg-primary/10 p-1.5 text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
        {trend && trendValue && (
          <div className="mt-2 flex items-center gap-1 text-xs">
            <div
              className={cn(
                "flex items-center gap-0.5 rounded-full px-1.5 py-0.5",
                trend === "up" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                trend === "down" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                trend === "neutral" && "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
              )}
            >
              {trend === "up" && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                  <path
                    fillRule="evenodd"
                    d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {trend === "down" && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                  <path
                    fillRule="evenodd"
                    d="M1.22 5.222a.75.75 0 011.06 0L7 9.942l3.768-3.769a.75.75 0 011.113.058 20.908 20.908 0 013.813 7.254l1.574-2.727a.75.75 0 011.3.75l-2.475 4.286a.75.75 0 01-.916.384l-4.573-1.435a.75.75 0 01.45-1.43l3.317 1.041a19.422 19.422 0 00-3.058-6.024l-3.563 3.563a.75.75 0 01-1.06 0L1.22 6.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {trend === "neutral" && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                  <path
                    fillRule="evenodd"
                    d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span className="font-medium">{trendValue}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
