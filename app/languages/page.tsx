"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LanguageChart } from "@/components/language-chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

// Mock data for language usage
const languageData = [
  { name: "JavaScript", value: 40, color: "#f7df1e" },
  { name: "TypeScript", value: 25, color: "#3178c6" },
  { name: "Python", value: 15, color: "#3776ab" },
  { name: "HTML", value: 10, color: "#e34f26" },
  { name: "CSS", value: 10, color: "#1572b6" },
]

// Mock data for language trends
const languageTrends = [
  { name: "JavaScript", current: 40, previous: 35, change: "+5%", color: "#f7df1e" },
  { name: "TypeScript", current: 25, previous: 20, change: "+5%", color: "#3178c6" },
  { name: "Python", current: 15, previous: 18, change: "-3%", color: "#3776ab" },
  { name: "HTML", current: 10, previous: 12, change: "-2%", color: "#e34f26" },
  { name: "CSS", current: 10, previous: 15, change: "-5%", color: "#1572b6" },
]

// Mock data for repositories by language
const repositoriesByLanguage = {
  JavaScript: [
    { name: "api-toolkit", stars: 56, percentage: 60 },
    { name: "data-visualization-library", stars: 124, percentage: 75 },
    { name: "portfolio-website", stars: 32, percentage: 45 },
  ],
  TypeScript: [
    { name: "github-organizer", stars: 45, percentage: 65 },
    { name: "private-project", stars: 0, percentage: 80 },
    { name: "api-toolkit", stars: 56, percentage: 40 },
  ],
  Python: [{ name: "ai-image-generator", stars: 78, percentage: 70 }],
  HTML: [
    { name: "portfolio-website", stars: 32, percentage: 30 },
    { name: "ai-image-generator", stars: 78, percentage: 10 },
  ],
  CSS: [
    { name: "portfolio-website", stars: 32, percentage: 25 },
    { name: "github-organizer", stars: 45, percentage: 15 },
    { name: "private-project", stars: 0, percentage: 20 },
  ],
}

export default function LanguagesPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Languages</h1>
            <p className="text-muted-foreground mt-2">Analysis of programming languages used in your repositories</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Repository type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All repositories</SelectItem>
                  <SelectItem value="sources">Source repositories</SelectItem>
                  <SelectItem value="forks">Forked repositories</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="year">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Last month</SelectItem>
                  <SelectItem value="quarter">Last quarter</SelectItem>
                  <SelectItem value="year">Last year</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
                <CardDescription>Breakdown of languages used across your repositories</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <LanguageChart data={languageData} />
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Language Trends</CardTitle>
                <CardDescription>How your language usage has changed over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {languageTrends.map((lang, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }}></div>
                          <span className="font-medium">{lang.name}</span>
                        </div>
                        <div
                          className={`text-sm ${lang.change.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                        >
                          {lang.change}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={lang.current} className="h-2" />
                        <span className="text-sm text-muted-foreground">{lang.current}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-md mb-8">
            <CardHeader>
              <CardTitle>Top Repositories by Language</CardTitle>
              <CardDescription>Your most significant repositories for each language</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Object.entries(repositoriesByLanguage).map(([language, repos], index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: languageData.find((l) => l.name === language)?.color }}
                      ></div>
                      <h3 className="font-medium text-lg">{language}</h3>
                    </div>
                    <div className="space-y-4">
                      {repos.map((repo, repoIndex) => (
                        <div key={repoIndex} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{repo.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {repo.percentage}% {language}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <svg
                              className="h-4 w-4 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span>{repo.stars}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
