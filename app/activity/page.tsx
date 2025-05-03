"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActivityChart } from "@/components/activity-chart"
import { ContributionCalendar } from "@/components/contribution-calendar"
import { GitCommit, GitPullRequest, GitMerge, MessageSquare } from "lucide-react"

// Mock data for activity
const activityData = [
  { day: "Mon", commits: 5, prs: 1, issues: 2, contributions: 8 },
  { day: "Tue", commits: 7, prs: 0, issues: 1, contributions: 8 },
  { day: "Wed", commits: 3, prs: 2, issues: 0, contributions: 5 },
  { day: "Thu", commits: 9, prs: 1, issues: 3, contributions: 13 },
  { day: "Fri", commits: 4, prs: 0, issues: 1, contributions: 5 },
  { day: "Sat", commits: 2, prs: 0, issues: 0, contributions: 2 },
  { day: "Sun", commits: 1, prs: 0, issues: 0, contributions: 1 },
]

// Generate mock contribution calendar data
const generateMockContributionData = () => {
  const weeks = 52
  const days = 7
  const data = []

  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < days; d++) {
      const count = Math.floor(Math.random() * 10)
      let level: 0 | 1 | 2 | 3 | 4 = 0
      if (count > 0) level = 1
      if (count > 2) level = 2
      if (count > 5) level = 3
      if (count > 8) level = 4

      const date = new Date()
      date.setDate(date.getDate() - (weeks - w) * 7 - (days - d))

      week.push({
        date: date.toISOString().split("T")[0],
        count,
        level,
      })
    }
    data.push(week)
  }

  return data
}

const mockContributionData = generateMockContributionData()

// Mock data for recent activity
const recentActivity = [
  {
    type: "commit",
    repo: "github-organizer",
    message: "Fix sidebar styling issues",
    time: "2 hours ago",
    icon: <GitCommit className="h-4 w-4" />,
  },
  {
    type: "pull_request",
    repo: "data-visualization-library",
    message: "Add new chart types",
    time: "5 hours ago",
    icon: <GitPullRequest className="h-4 w-4" />,
  },
  {
    type: "issue",
    repo: "api-toolkit",
    message: "Improve error handling",
    time: "1 day ago",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    type: "merge",
    repo: "portfolio-website",
    message: "Merge pull request #12",
    time: "2 days ago",
    icon: <GitMerge className="h-4 w-4" />,
  },
  {
    type: "commit",
    repo: "github-organizer",
    message: "Update dashboard components",
    time: "2 days ago",
    icon: <GitCommit className="h-4 w-4" />,
  },
  {
    type: "pull_request",
    repo: "ai-image-generator",
    message: "Implement new image filters",
    time: "3 days ago",
    icon: <GitPullRequest className="h-4 w-4" />,
  },
  {
    type: "issue",
    repo: "data-visualization-library",
    message: "Bug in pie chart rendering",
    time: "4 days ago",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    type: "commit",
    repo: "api-toolkit",
    message: "Add authentication helpers",
    time: "5 days ago",
    icon: <GitCommit className="h-4 w-4" />,
  },
]

export default function ActivityPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Activity</h1>
            <p className="text-muted-foreground mt-2">Your GitHub activity and contributions</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Activity type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All activity</SelectItem>
                  <SelectItem value="commits">Commits</SelectItem>
                  <SelectItem value="prs">Pull requests</SelectItem>
                  <SelectItem value="issues">Issues</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="year">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last week</SelectItem>
                  <SelectItem value="month">Last month</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Contribution Activity</CardTitle>
                <CardDescription>Your GitHub contributions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ContributionCalendar data={mockContributionData} />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Commits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <GitCommit className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">1,248</div>
                      <div className="text-sm text-muted-foreground">Total commits</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      ></path>
                    </svg>
                    <span>+12% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pull Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <GitPullRequest className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">87</div>
                      <div className="text-sm text-muted-foreground">Total PRs</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      ></path>
                    </svg>
                    <span>+8% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">53</div>
                      <div className="text-sm text-muted-foreground">Total issues</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      ></path>
                    </svg>
                    <span>+5% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your activity over the past week</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ActivityChart data={activityData} />
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest GitHub actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.slice(0, 5).map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 mt-1">
                        {activity.icon}
                      </div>
                      <div>
                        <div className="font-medium">{activity.message}</div>
                        <div className="text-sm text-muted-foreground">
                          in <span className="text-blue-600 dark:text-blue-400">{activity.repo}</span> • {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
