"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Star, GitFork, Eye, Code, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for repositories
const repositories = [
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
    url: "https://github.com/yourusername/github-organizer",
    isPrivate: false,
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
    url: "https://github.com/yourusername/portfolio-website",
    isPrivate: false,
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
    url: "https://github.com/yourusername/ai-image-generator",
    isPrivate: false,
  },
  {
    name: "private-project",
    description: "A private project for client work",
    stars: 0,
    forks: 0,
    watchers: 2,
    updatedAt: "1 day ago",
    languages: [
      { name: "TypeScript", percentage: 80, color: "#3178c6" },
      { name: "CSS", percentage: 20, color: "#1572b6" },
    ],
    topics: [],
    url: "https://github.com/yourusername/private-project",
    isPrivate: true,
  },
  {
    name: "data-visualization-library",
    description: "A library for creating interactive data visualizations",
    stars: 124,
    forks: 35,
    watchers: 18,
    updatedAt: "5 days ago",
    languages: [
      { name: "JavaScript", percentage: 75, color: "#f7df1e" },
      { name: "TypeScript", percentage: 20, color: "#3178c6" },
      { name: "CSS", percentage: 5, color: "#1572b6" },
    ],
    topics: ["data-visualization", "charts", "d3", "interactive", "library"],
    url: "https://github.com/yourusername/data-visualization-library",
    isPrivate: false,
  },
  {
    name: "api-toolkit",
    description: "A collection of tools for working with RESTful APIs",
    stars: 56,
    forks: 14,
    watchers: 9,
    updatedAt: "1 week ago",
    languages: [
      { name: "JavaScript", percentage: 60, color: "#f7df1e" },
      { name: "TypeScript", percentage: 40, color: "#3178c6" },
    ],
    topics: ["api", "rest", "toolkit", "utilities", "javascript"],
    url: "https://github.com/yourusername/api-toolkit",
    isPrivate: false,
  },
]

export default function RepositoriesPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Repositories</h1>
              <p className="text-muted-foreground mt-2">Your GitHub repositories</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Find a repository..." className="w-full pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="sources">Sources</SelectItem>
                  <SelectItem value="forks">Forks</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="updated">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="updated">Last updated</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="stars">Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="mb-6 bg-card border border-border/50 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="sources" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Sources
              </TabsTrigger>
              <TabsTrigger value="forks" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Forks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {repositories.map((repo, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">
                              <a href={repo.url} className="hover:text-blue-600 hover:underline">
                                {repo.name}
                              </a>
                            </h3>
                            {repo.isPrivate && (
                              <Badge
                                variant="outline"
                                className="text-xs bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                              >
                                Private
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">{repo.description}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Star
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                          <div className="flex items-center">
                            {repo.languages.map((lang, i) => (
                              <div
                                key={i}
                                className="h-3 w-3 rounded-full mr-1"
                                style={{ backgroundColor: lang.color }}
                                title={`${lang.name}: ${lang.percentage}%`}
                              ></div>
                            ))}
                          </div>
                          <span>{repo.languages[0].name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          <span>{repo.forks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{repo.watchers}</span>
                        </div>
                        <div>Updated {repo.updatedAt}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sources">
              <div className="space-y-4">
                {repositories
                  .filter((repo) => !repo.isPrivate)
                  .map((repo, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">
                              <a href={repo.url} className="hover:text-blue-600 hover:underline">
                                {repo.name}
                              </a>
                            </h3>
                            <p className="text-muted-foreground text-sm mt-1">{repo.description}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-1" />
                            Star
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
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
                            <div className="flex items-center">
                              {repo.languages.map((lang, i) => (
                                <div
                                  key={i}
                                  className="h-3 w-3 rounded-full mr-1"
                                  style={{ backgroundColor: lang.color }}
                                  title={`${lang.name}: ${lang.percentage}%`}
                                ></div>
                              ))}
                            </div>
                            <span>{repo.languages[0].name}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            <span>{repo.forks}</span>
                          </div>
                          <div>Updated {repo.updatedAt}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="forks">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Code className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No forks yet</h3>
                <p className="text-muted-foreground max-w-md">
                  When you fork repositories, they'll appear here. Forking allows you to make changes to a project
                  without affecting the original.
                </p>
                <Button className="mt-6">Explore repositories</Button>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
