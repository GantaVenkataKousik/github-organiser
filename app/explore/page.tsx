"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Compass, TrendingUp, Star, GitFork, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for trending repositories
const trendingRepos = [
  {
    name: "react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces",
    stars: 152000,
    forks: 27500,
    watchers: 8000,
    updatedAt: "1 day ago",
    languages: [
      { name: "JavaScript", percentage: 65, color: "#f7df1e" },
      { name: "TypeScript", percentage: 25, color: "#3178c6" },
      { name: "CSS", percentage: 10, color: "#1572b6" },
    ],
    topics: ["javascript", "ui", "frontend", "react"],
    url: "https://github.com/facebook/react",
  },
  {
    name: "next.js",
    description: "The React Framework for the Web",
    stars: 108000,
    forks: 24300,
    watchers: 6000,
    updatedAt: "2 days ago",
    languages: [
      { name: "TypeScript", percentage: 75, color: "#3178c6" },
      { name: "JavaScript", percentage: 20, color: "#f7df1e" },
      { name: "CSS", percentage: 5, color: "#1572b6" },
    ],
    topics: ["react", "nextjs", "framework", "ssr"],
    url: "https://github.com/vercel/next.js",
  },
  {
    name: "deno",
    description: "A secure runtime for JavaScript and TypeScript",
    stars: 89000,
    forks: 12000,
    watchers: 4500,
    updatedAt: "3 days ago",
    languages: [
      { name: "TypeScript", percentage: 80, color: "#3178c6" },
      { name: "Rust", percentage: 15, color: "#dea584" },
      { name: "JavaScript", percentage: 5, color: "#f7df1e" },
    ],
    topics: ["javascript", "typescript", "runtime", "security"],
    url: "https://github.com/denoland/deno",
  },
]

// Mock data for popular categories
const categories = [
  { name: "Web Development", count: 125000, icon: <Compass className="h-4 w-4" /> },
  { name: "Machine Learning", count: 98000, icon: <TrendingUp className="h-4 w-4" /> },
  { name: "Mobile Development", count: 87000, icon: <Star className="h-4 w-4" /> },
  { name: "Data Science", count: 76000, icon: <GitFork className="h-4 w-4" /> },
  { name: "DevOps", count: 65000, icon: <Users className="h-4 w-4" /> },
]

export default function ExplorePage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Explore</h1>
            <p className="text-muted-foreground mt-2">Discover interesting projects and developers</p>
          </div>

          <Card className="mb-8 overflow-hidden border border-border/50 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search repositories, users, or topics" className="w-full pl-10 h-12 text-base" />
                </div>
                <Button className="gap-2 h-12 px-6">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <Card className="shadow-md h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Trending Repositories</span>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      Today
                    </Badge>
                  </CardTitle>
                  <CardDescription>See what the GitHub community is most excited about today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trendingRepos.map((repo, index) => (
                      <div key={index} className="pb-6 border-b last:border-0 last:pb-0">
                        <h3 className="font-semibold text-lg mb-1">
                          <a href={repo.url} className="hover:text-blue-600 hover:underline">
                            {repo.name}
                          </a>
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">{repo.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {repo.topics.map((topic, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>{repo.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            <span>{repo.forks.toLocaleString()}</span>
                          </div>
                          <div>Updated {repo.updatedAt}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-md h-full">
                <CardHeader>
                  <CardTitle>Popular Categories</CardTitle>
                  <CardDescription>Browse repositories by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            {category.icon}
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary">{category.count.toLocaleString()}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle>Discover Developers</CardTitle>
              <CardDescription>Find developers to follow and collaborate with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                    <div>
                      <h3 className="font-medium">Developer {index + 1}</h3>
                      <p className="text-sm text-muted-foreground">Full-stack Developer</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{(index + 1) * 120} followers</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Follow
                    </Button>
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
