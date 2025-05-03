"use client"

import { useState } from "react"
import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatsCard } from "@/components/stats-card"
import { RepositoryCard } from "@/components/repository-card"
import { ActivityChart } from "@/components/activity-chart"
import { LanguageChart } from "@/components/language-chart"
import { ContributionCalendar } from "@/components/contribution-calendar"
import { DeveloperProfile } from "@/components/developer-profile"
import {
  Search,
  Star,
  GitFork,
  Users,
  Code,
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  BarChart2,
  PieChart,
  Activity,
  FileCode,
  GitPullRequest,
  GitCommit,
  GitMerge,
  Eye,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { RecentActivityFeed } from "@/components/recent-activity-feed"
import { TrendingRepos } from "@/components/trending-repos"
import { PopularLanguages } from "@/components/popular-languages"
import { QuickActions } from "@/components/quick-actions"
import { RecommendedUsers } from "@/components/recommended-users"
import { TopContributors } from "@/components/top-contributors"

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

const mockRepositories = [
  {
    name: "github-organizer",
    description: "A comprehensive GitHub profile analytics and organization tool",
    stars: 45,
    forks: 12,
    watchers: 8,
    updatedAt: "2 days ago",
    languages: [
      { name: "TypeScript", percentage: 65, color: "#3178c6" },
      { name: "JavaScript", percentage: 20, color: "#f7df1e" },
      { name: "CSS", percentage: 15, color: "#1572b6" },
    ],
    topics: ["github", "analytics", "dashboard", "typescript", "react"],
    url: "https://github.com/GantaVenkataKousik/github-organizer",
  },
  {
    name: "portfolio-website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS",
    stars: 32,
    forks: 8,
    watchers: 5,
    updatedAt: "1 week ago",
    languages: [
      { name: "JavaScript", percentage: 45, color: "#f7df1e" },
      { name: "HTML", percentage: 30, color: "#e34f26" },
      { name: "CSS", percentage: 25, color: "#1572b6" },
    ],
    topics: ["portfolio", "nextjs", "tailwindcss", "responsive"],
    url: "https://github.com/GantaVenkataKousik/portfolio-website",
  },
  {
    name: "ai-image-generator",
    description: "An AI-powered image generation tool using DALL-E API",
    stars: 78,
    forks: 23,
    watchers: 15,
    updatedAt: "3 days ago",
    languages: [
      { name: "Python", percentage: 70, color: "#3776ab" },
      { name: "JavaScript", percentage: 20, color: "#f7df1e" },
      { name: "HTML", percentage: 10, color: "#e34f26" },
    ],
    topics: ["ai", "machine-learning", "image-generation", "dall-e", "api"],
    url: "https://github.com/GantaVenkataKousik/ai-image-generator",
  },
]

// Analytics data
const analyticsData = {
  totalCommits: 1248,
  totalPRs: 87,
  totalIssues: 53,
  codeReviews: 124,
  contributionTrend: "+12%",
  topLanguage: "TypeScript",
  mostActiveDay: "Thursday",
  averageCommitsPerDay: 5.2,
}

export default function Dashboard() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    if (!username) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setHasSearched(true)
    }, 1500)
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">GitHub Organizer</h1>
            <p className="text-muted-foreground mt-2">Track and analyze GitHub profiles with ease</p>
          </div>

          <Card className="mb-8 overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 h-12 text-base font-medium"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="gap-2 h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span className="sm:inline">Search</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {!hasSearched && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="col-span-2 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Welcome to GitHub Organizer</span>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      >
                        New
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Discover insights, track repositories, and analyze GitHub profiles with powerful analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Get Started</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                              <span className="text-xs">1</span>
                            </div>
                            <span>Search for a GitHub username</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                              <span className="text-xs">2</span>
                            </div>
                            <span>Explore detailed analytics and insights</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                              <span className="text-xs">3</span>
                            </div>
                            <span>Track repositories and contributions</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                              <span className="text-xs">4</span>
                            </div>
                            <span>Compare profiles and discover trends</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Features</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <BarChart2 className="h-4 w-4 text-primary" />
                            <span>Advanced analytics and visualizations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Activity className="h-4 w-4 text-primary" />
                            <span>Contribution tracking and history</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <PieChart className="h-4 w-4 text-primary" />
                            <span>Language usage breakdown</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <span>Repository growth and trends</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <QuickActions />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                  title="Total Users"
                  value="10.2M+"
                  icon={<Users className="h-4 w-4" />}
                  description="GitHub users analyzed"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
                <StatsCard
                  title="Repositories"
                  value="45M+"
                  icon={<Code className="h-4 w-4" />}
                  description="Public repositories tracked"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
                <StatsCard
                  title="Languages"
                  value="370+"
                  icon={<FileCode className="h-4 w-4" />}
                  description="Programming languages detected"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
                <StatsCard
                  title="Daily Searches"
                  value="25K+"
                  icon={<Search className="h-4 w-4" />}
                  description="Profiles analyzed daily"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
              </div>

              {/* New Analytics Cards Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Key GitHub Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Commits</p>
                          <h3 className="text-2xl font-bold mt-1">{analyticsData.totalCommits}</h3>
                        </div>
                        <div className="h-12 w-12 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center">
                          <GitCommit className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-xs text-blue-600 dark:text-blue-400">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span>{analyticsData.contributionTrend} from last month</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Pull Requests</p>
                          <h3 className="text-2xl font-bold mt-1">{analyticsData.totalPRs}</h3>
                        </div>
                        <div className="h-12 w-12 bg-purple-100 dark:bg-purple-800/30 rounded-full flex items-center justify-center">
                          <GitPullRequest className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-xs text-purple-600 dark:text-purple-400">
                        <span>Most active day: {analyticsData.mostActiveDay}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">Code Reviews</p>
                          <h3 className="text-2xl font-bold mt-1">{analyticsData.codeReviews}</h3>
                        </div>
                        <div className="h-12 w-12 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center">
                          <Eye className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-xs text-green-600 dark:text-green-400">
                        <span>Avg. {analyticsData.averageCommitsPerDay} commits per day</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-amber-600 dark:text-amber-400">Issues</p>
                          <h3 className="text-2xl font-bold mt-1">{analyticsData.totalIssues}</h3>
                        </div>
                        <div className="h-12 w-12 bg-amber-100 dark:bg-amber-800/30 rounded-full flex items-center justify-center">
                          <GitMerge className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-xs text-amber-600 dark:text-amber-400">
                        <span>Top language: {analyticsData.topLanguage}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <TrendingRepos />
                <div className="md:col-span-1">
                  <PopularLanguages />
                </div>
                <div className="md:col-span-1">
                  <RecommendedUsers />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="w-full">
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <CardTitle>Global Activity</CardTitle>
                      <CardDescription>Worldwide GitHub activity in the last 24 hours</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] p-2">
                      <ActivityChart data={mockActivityData} />
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full">
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <CardTitle>Language Distribution</CardTitle>
                      <CardDescription>Most popular languages across GitHub</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] p-2">
                      <LanguageChart data={mockLanguageData} />
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-8">
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Recent Activity Feed</CardTitle>
                    <CardDescription>Latest events from the GitHub community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivityFeed />
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Top Contributors</CardTitle>
                    <CardDescription>Most active GitHub contributors this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TopContributors />
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {hasSearched && (
            <>
              <div className="mb-8">
                <DeveloperProfile />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <StatsCard
                  title="Repositories"
                  value="42"
                  icon={<Code className="h-4 w-4" />}
                  trend="up"
                  trendValue="3 new this month"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
                <StatsCard
                  title="Stars"
                  value="156"
                  icon={<Star className="h-4 w-4" />}
                  trend="up"
                  trendValue="24 new this month"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
                <StatsCard
                  title="Forks"
                  value="18"
                  icon={<GitFork className="h-4 w-4" />}
                  trend="up"
                  trendValue="12 new this month"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
                <StatsCard
                  title="Followers"
                  value="156"
                  icon={<Users className="h-4 w-4" />}
                  trend="up"
                  trendValue="8 new this month"
                  className="shadow-md hover:shadow-lg transition-shadow"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="w-full">
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <CardTitle>Activity Overview</CardTitle>
                      <CardDescription>Your GitHub activity over time</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] p-2">
                      <ActivityChart data={mockActivityData} />
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full">
                  <Card className="shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <CardTitle>Language Breakdown</CardTitle>
                      <CardDescription>Your most used programming languages</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] p-2">
                      <LanguageChart data={mockLanguageData} />
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mb-8">
                <ContributionCalendar data={mockContributionData} />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <StatsCard
                  title="Contributions"
                  value="1,248"
                  icon={<Code className="h-4 w-4" />}
                  description="Total contributions in the last year"
                />
                <StatsCard
                  title="Streak"
                  value="32 days"
                  icon={<Award className="h-4 w-4" />}
                  description="Current contribution streak"
                />
                <StatsCard
                  title="Gists"
                  value="18"
                  icon={<BookOpen className="h-4 w-4" />}
                  description="Public gists created"
                />
                <StatsCard
                  title="Active Since"
                  value="3.5 years"
                  icon={<Clock className="h-4 w-4" />}
                  description="Joined GitHub on Mar 15, 2020"
                />
              </div>

              <div className="mb-8">
                <Tabs defaultValue="repositories" className="w-full">
                  <TabsList className="mb-6 bg-card border border-border/50 p-1">
                    <TabsTrigger
                      value="repositories"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Repositories
                    </TabsTrigger>
                    <TabsTrigger
                      value="starred"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Starred
                    </TabsTrigger>
                    <TabsTrigger
                      value="forks"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Forks
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="repositories">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {mockRepositories.map((repo, index) => (
                        <RepositoryCard key={index} {...repo} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="starred">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {mockRepositories.slice(0, 3).map((repo, index) => (
                        <RepositoryCard key={index} {...repo} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="forks">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {mockRepositories.slice(3, 5).map((repo, index) => (
                        <RepositoryCard key={index} {...repo} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
