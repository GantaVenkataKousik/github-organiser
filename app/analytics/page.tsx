"use client"

import { useState } from "react"
import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ActivityChart } from "@/components/activity-chart"
import { LanguageChart } from "@/components/language-chart"
import { ContributionCalendar } from "@/components/contribution-calendar"
import { StatsCard } from "@/components/stats-card"
import {
  GitBranch,
  GitPullRequest,
  GitMerge,
  Code,
  Star,
  GitFork,
  Users,
  Clock,
  Calendar,
  TrendingUp,
  FileCode,
  Filter,
  Download,
} from "lucide-react"

// Mock data for demonstration
const mockLanguageData = [
  { name: "JavaScript", value: 40, color: "#f7df1e" },
  { name: "TypeScript", value: 25, color: "#3178c6" },
  { name: "Python", value: 15, color: "#3776ab" },
  { name: "HTML", value: 10, color: "#e34f26" },
  { name: "CSS", value: 10, color: "#1572b6" },
]

const mockActivityData = [
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

// Mock repository performance data
const mockRepoPerformanceData = [
  { name: "github-organizer", stars: 45, forks: 12, issues: 8, prs: 15, commits: 230 },
  { name: "portfolio-website", stars: 32, forks: 8, issues: 5, prs: 10, commits: 180 },
  { name: "ai-image-generator", stars: 78, forks: 23, issues: 15, prs: 25, commits: 320 },
  { name: "react-component-library", stars: 56, forks: 18, issues: 12, prs: 20, commits: 270 },
  { name: "python-data-analysis", stars: 42, forks: 15, issues: 10, prs: 18, commits: 210 },
]

// Mock language trends data
const mockLanguageTrendsData = [
  { month: "Jan", JavaScript: 25, TypeScript: 15, Python: 10, HTML: 5, CSS: 5 },
  { month: "Feb", JavaScript: 28, TypeScript: 18, Python: 12, HTML: 6, CSS: 6 },
  { month: "Mar", JavaScript: 30, TypeScript: 22, Python: 15, HTML: 7, CSS: 7 },
  { month: "Apr", JavaScript: 35, TypeScript: 25, Python: 18, HTML: 8, CSS: 8 },
  { month: "May", JavaScript: 32, TypeScript: 28, Python: 20, HTML: 7, CSS: 7 },
  { month: "Jun", JavaScript: 38, TypeScript: 30, Python: 22, HTML: 8, CSS: 8 },
]

// Mock contribution trends data
const mockContributionTrendsData = [
  { month: "Jan", commits: 45, prs: 12, issues: 18 },
  { month: "Feb", commits: 52, prs: 15, issues: 22 },
  { month: "Mar", commits: 58, prs: 18, issues: 25 },
  { month: "Apr", commits: 65, prs: 20, issues: 28 },
  { month: "May", commits: 72, prs: 22, issues: 30 },
  { month: "Jun", commits: 80, prs: 25, issues: 32 },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("last-year")

  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              GitHub Analytics
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Comprehensive analytics and insights for GitHub profiles
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
            <div className="flex gap-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="all-time">All Time</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Data
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full mb-8">
            <TabsList className="mb-6 bg-card border border-border/50 p-1">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="repositories"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Repositories
              </TabsTrigger>
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Languages
              </TabsTrigger>
              <TabsTrigger
                value="trends"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Trends
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Total Commits"
                  value="1,248"
                  icon={<GitBranch className="h-4 w-4" />}
                  trend="up"
                  trendValue="12% increase"
                  className="card-shadow"
                />
                <StatsCard
                  title="Pull Requests"
                  value="156"
                  icon={<GitPullRequest className="h-4 w-4" />}
                  trend="up"
                  trendValue="8% increase"
                  className="card-shadow"
                />
                <StatsCard
                  title="Issues Created"
                  value="98"
                  icon={<GitMerge className="h-4 w-4" />}
                  trend="down"
                  trendValue="3% decrease"
                  className="card-shadow"
                />
                <StatsCard
                  title="Contributions"
                  value="1,502"
                  icon={<Code className="h-4 w-4" />}
                  trend="up"
                  trendValue="15% increase"
                  className="card-shadow"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Activity Breakdown</CardTitle>
                    <CardDescription>Commits, PRs, and issues over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ActivityChart data={mockActivityData} />
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Language Distribution</CardTitle>
                    <CardDescription>Programming languages used in repositories</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <LanguageChart data={mockLanguageData} />
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Contribution Calendar</CardTitle>
                    <CardDescription>GitHub contribution activity over the past year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContributionCalendar data={mockContributionData} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Repositories Tab */}
            <TabsContent value="repositories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Total Repos"
                  value="42"
                  icon={<Code className="h-4 w-4" />}
                  trend="up"
                  trendValue="3 new this month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Total Stars"
                  value="328"
                  icon={<Star className="h-4 w-4" />}
                  trend="up"
                  trendValue="24 new this month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Total Forks"
                  value="97"
                  icon={<GitFork className="h-4 w-4" />}
                  trend="up"
                  trendValue="12 new this month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Watchers"
                  value="156"
                  icon={<Users className="h-4 w-4" />}
                  trend="up"
                  trendValue="8 new this month"
                  className="card-shadow"
                />
              </div>

              <Card className="mb-8 card-shadow">
                <CardHeader>
                  <CardTitle>Repository Performance</CardTitle>
                  <CardDescription>Stars, forks, issues, and PRs for top repositories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Repository</th>
                          <th className="text-center py-3 px-4">Stars</th>
                          <th className="text-center py-3 px-4">Forks</th>
                          <th className="text-center py-3 px-4">Issues</th>
                          <th className="text-center py-3 px-4">PRs</th>
                          <th className="text-center py-3 px-4">Commits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockRepoPerformanceData.map((repo, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">{repo.name}</td>
                            <td className="text-center py-3 px-4">{repo.stars}</td>
                            <td className="text-center py-3 px-4">{repo.forks}</td>
                            <td className="text-center py-3 px-4">{repo.issues}</td>
                            <td className="text-center py-3 px-4">{repo.prs}</td>
                            <td className="text-center py-3 px-4">{repo.commits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Repository Creation Timeline</CardTitle>
                    <CardDescription>When repositories were created over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Repository timeline chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Repository Size Distribution</CardTitle>
                    <CardDescription>Size of repositories by lines of code</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Repository size chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Languages Tab */}
            <TabsContent value="languages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Languages Used"
                  value="12"
                  icon={<FileCode className="h-4 w-4" />}
                  trend="up"
                  trendValue="2 new this year"
                  className="card-shadow"
                />
                <StatsCard
                  title="Primary Language"
                  value="JavaScript"
                  icon={<Code className="h-4 w-4" />}
                  description="40% of all code"
                  className="card-shadow"
                />
                <StatsCard
                  title="Secondary Language"
                  value="TypeScript"
                  icon={<Code className="h-4 w-4" />}
                  description="25% of all code"
                  className="card-shadow"
                />
                <StatsCard
                  title="Total LOC"
                  value="125K+"
                  icon={<FileCode className="h-4 w-4" />}
                  trend="up"
                  trendValue="15K this month"
                  className="card-shadow"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Language Distribution</CardTitle>
                    <CardDescription>Breakdown of programming languages used</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <LanguageChart data={mockLanguageData} />
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Language Trends</CardTitle>
                    <CardDescription>Changes in language usage over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Language trends chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-8 card-shadow">
                <CardHeader>
                  <CardTitle>Language Usage by Repository</CardTitle>
                  <CardDescription>Which languages are used in each repository</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Repository</th>
                          <th className="text-center py-3 px-4">Primary Language</th>
                          <th className="text-center py-3 px-4">Secondary Language</th>
                          <th className="text-center py-3 px-4">Other Languages</th>
                          <th className="text-center py-3 px-4">Total LOC</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">github-organizer</td>
                          <td className="text-center py-3 px-4">TypeScript (65%)</td>
                          <td className="text-center py-3 px-4">JavaScript (20%)</td>
                          <td className="text-center py-3 px-4">CSS (15%)</td>
                          <td className="text-center py-3 px-4">32.5K</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">portfolio-website</td>
                          <td className="text-center py-3 px-4">JavaScript (45%)</td>
                          <td className="text-center py-3 px-4">HTML (30%)</td>
                          <td className="text-center py-3 px-4">CSS (25%)</td>
                          <td className="text-center py-3 px-4">18.2K</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">ai-image-generator</td>
                          <td className="text-center py-3 px-4">Python (70%)</td>
                          <td className="text-center py-3 px-4">JavaScript (20%)</td>
                          <td className="text-center py-3 px-4">HTML (10%)</td>
                          <td className="text-center py-3 px-4">24.8K</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">react-component-library</td>
                          <td className="text-center py-3 px-4">TypeScript (75%)</td>
                          <td className="text-center py-3 px-4">CSS (15%)</td>
                          <td className="text-center py-3 px-4">JavaScript (10%)</td>
                          <td className="text-center py-3 px-4">28.6K</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">python-data-analysis</td>
                          <td className="text-center py-3 px-4">Python (85%)</td>
                          <td className="text-center py-3 px-4">Jupyter (10%)</td>
                          <td className="text-center py-3 px-4">Markdown (5%)</td>
                          <td className="text-center py-3 px-4">21.3K</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Contribution Streak"
                  value="32 days"
                  icon={<Calendar className="h-4 w-4" />}
                  trend="up"
                  trendValue="8 days increase"
                  className="card-shadow"
                />
                <StatsCard
                  title="Avg. Daily Commits"
                  value="4.2"
                  icon={<GitBranch className="h-4 w-4" />}
                  trend="up"
                  trendValue="0.8 increase"
                  className="card-shadow"
                />
                <StatsCard
                  title="Growth Rate"
                  value="15%"
                  icon={<TrendingUp className="h-4 w-4" />}
                  description="Month over month"
                  className="card-shadow"
                />
                <StatsCard
                  title="Active Since"
                  value="3.5 years"
                  icon={<Clock className="h-4 w-4" />}
                  description="Joined Mar 15, 2020"
                  className="card-shadow"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Contribution Trends</CardTitle>
                    <CardDescription>Commits, PRs, and issues over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Contribution trends chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Activity Heatmap</CardTitle>
                    <CardDescription>When contributions are made during the day/week</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Activity heatmap will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Repository Growth</CardTitle>
                    <CardDescription>Stars and forks growth over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Repository growth chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Contribution Velocity</CardTitle>
                    <CardDescription>Speed and frequency of contributions</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      Contribution velocity chart will be displayed here
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
