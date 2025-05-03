"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ContributionCalendarProps {
  data: ContributionDay[][]
  className?: string
}

export function ContributionCalendar({ data, className }: ContributionCalendarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Contribution Calendar</CardTitle>
        </CardHeader>
        <CardContent className="h-[150px] flex items-center justify-center">
          <div className="animate-pulse-opacity">Loading calendar...</div>
        </CardContent>
      </Card>
    )
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const days = ["", "Mon", "", "Wed", "", "Fri", ""]

  return (
    <Card className={className}>
      <CardHeader className="bg-muted/30">
        <CardTitle className="font-semibold">Contribution Calendar</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col gap-2">
          <div className="flex text-xs text-muted-foreground">
            {months.map((month, i) => (
              <div key={i} className="flex-1 text-center">
                {month}
              </div>
            ))}
          </div>
          <div className="flex">
            <div className="flex flex-col gap-[3px] mr-2 text-xs text-muted-foreground">
              {days.map((day, i) => (
                <div key={i} className="h-[10px] flex items-center">
                  {day}
                </div>
              ))}
            </div>
            <div className="flex-1 grid grid-cols-52 gap-[3px]">
              {data.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="h-[10px] w-[10px] rounded-sm contribution-cell"
                      style={{
                        backgroundColor:
                          day.level === 0
                            ? "var(--muted)"
                            : day.level === 1
                              ? "#9be9a8"
                              : day.level === 2
                                ? "#40c463"
                                : day.level === 3
                                  ? "#30a14e"
                                  : "#216e39",
                      }}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-2">
            <div className="text-xs text-muted-foreground">Less</div>
            <div className="h-[10px] w-[10px] rounded-sm bg-muted"></div>
            <div className="h-[10px] w-[10px] rounded-sm bg-[#9be9a8]"></div>
            <div className="h-[10px] w-[10px] rounded-sm bg-[#40c463]"></div>
            <div className="h-[10px] w-[10px] rounded-sm bg-[#30a14e]"></div>
            <div className="h-[10px] w-[10px] rounded-sm bg-[#216e39]"></div>
            <div className="text-xs text-muted-foreground">More</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
