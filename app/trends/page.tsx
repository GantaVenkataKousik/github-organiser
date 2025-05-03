"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Users, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { RepositoryCard } from "@/components/repository-card"

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

// Mock data for trending developers
const trendingDevelopers = [
  {
    name: "Sarah Chen",
    username: "sarahchen",
    avatar: "S",
    bio: "Full-stack developer specializing in React and Node.js",
    followers: 12500,
    contributions: 1248,
    popularRepo: "react-dashboard",
  },
  {
    name: "Alex Johnson",
    username: "alexjohnson",
    avatar: "A",
    bio: "Machine learning engineer and open source contributor",
    followers: 8700,
    contributions: 876,
    popularRepo: "ml-toolkit",
  },
  {
    name: "Maria Rodriguez",
    username: "mariarodriguez",
    avatar: "M",
    bio: "Frontend developer and UI/UX enthusiast",
    followers: 6300,
    contributions: 542,
    popularRepo: "design-system",
  },
]

// Mock data for trending languages
const trendingLanguages = [
  { name: "TypeScript", growth: "+15%", repositories: 2500000, color: "#3178c6" },
  { name: "Python", growth: "+12%", repositories: 4200000, color: "#3776ab" },
  { name: "Rust", growth: "+32%", repositories: 980000, color: "#dea584" },
  { name: "Go", growth: "+18%", repositories: 1700000, color: "#00add8" },
  { name: "Kotlin", growth: "+22%", repositories: 1200000, color: "#a97bff" },
]

export default function TrendsPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Trends</h1>
            <p className="text-muted-foreground mt-2">Discover what's trending on GitHub</p>
          </div>

          <Tabs defaultValue="repositories" className="w-full mb-8">
            <TabsList className="mb-6 bg-card border border-border/50 p-1">
              <TabsTrigger
                value="repositories"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Repositories
              </TabsTrigger>
              <TabsTrigger
                value="developers"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Developers
              </TabsTrigger>
              <TabsTrigger value="languages" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Languages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="repositories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingRepos.map((repo, index) => (
                  <RepositoryCard key={index} {...repo} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="developers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trendingDevelopers.map((dev, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                          {dev.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium">{dev.name}</h3>
                          <p className="text-sm text-muted-foreground">@{dev.username}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{dev.bio}</p>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{dev.followers.toLocaleString()} followers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Code className="h-4 w-4" />
                          <span>{dev.contributions} contributions</span>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">Popular repository</span>
                        </div>
                        <p className="text-sm">{dev.popularRepo}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingLanguages.map((lang, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${lang.color}20` }}
                          >
                            <div className="h-5 w-5 rounded-full" style={{ backgroundColor: lang.color }}></div>
                          </div>
                          <h3 className="font-medium text-lg">{lang.name}</h3>
                        </div>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {lang.growth}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Repositories</span>
                          <span className="font-medium">{lang.repositories.toLocaleString()}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.min(100, (lang.repositories / 5000000) * 100)}%`,
                              backgroundColor: lang.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
