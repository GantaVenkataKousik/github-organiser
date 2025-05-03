"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, GitFork, Star, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for forked repositories
const forkedRepos = [
  {
    name: "react-fork",
    description: "My fork of React with custom features",
    stars: 12,
    forks: 3,
    watchers: 5,
    updatedAt: "1 week ago",
    languages: [
      { name: "JavaScript", percentage: 65, color: "#f7df1e" },
      { name: "TypeScript", percentage: 25, color: "#3178c6" },
      { name: "CSS", percentage: 10, color: "#1572b6" },
    ],
    topics: ["javascript", "ui", "frontend", "react"],
    url: "https://github.com/yourusername/react-fork",
    forkedFrom: "facebook/react",
  },
  {
    name: "next.js-custom",
    description: "Customized version of Next.js for my projects",
    stars: 8,
    forks: 1,
    watchers: 3,
    updatedAt: "2 weeks ago",
    languages: [
      { name: "TypeScript", percentage: 75, color: "#3178c6" },
      { name: "JavaScript", percentage: 20, color: "#f7df1e" },
      { name: "CSS", percentage: 5, color: "#1572b6" },
    ],
    topics: ["react", "nextjs", "framework", "ssr"],
    url: "https://github.com/yourusername/next.js-custom",
    forkedFrom: "vercel/next.js",
  },
  {
    name: "tensorflow-experiments",
    description: "My experiments with TensorFlow",
    stars: 5,
    forks: 0,
    watchers: 2,
    updatedAt: "1 month ago",
    languages: [
      { name: "Python", percentage: 85, color: "#3776ab" },
      { name: "Jupyter Notebook", percentage: 15, color: "#DA5B0B" },
    ],
    topics: ["machine-learning", "ai", "deep-learning", "experiments"],
    url: "https://github.com/yourusername/tensorflow-experiments",
    forkedFrom: "tensorflow/tensorflow",
  },
  {
    name: "vscode-extension",
    description: "Custom VS Code extension for GitHub integration",
    stars: 15,
    forks: 2,
    watchers: 4,
    updatedAt: "3 weeks ago",
    languages: [
      { name: "TypeScript", percentage: 90, color: "#3178c6" },
      { name: "JSON", percentage: 10, color: "#292929" },
    ],
    topics: ["vscode", "extension", "github", "productivity"],
    url: "https://github.com/yourusername/vscode-extension",
    forkedFrom: "microsoft/vscode-extension-samples",
  },
]

export default function ForksPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Forked Repositories</h1>
            <p className="text-muted-foreground mt-2">Repositories you've forked from others</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Find a repository..." className="w-full pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="recently-updated">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recently-updated">Recently updated</SelectItem>
                  <SelectItem value="oldest-updated">Oldest updated</SelectItem>
                  <SelectItem value="most-stars">Most stars</SelectItem>
                  <SelectItem value="recently-forked">Recently forked</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {forkedRepos.map((repo, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="font-semibold text-lg">
                      <a href={repo.url} className="hover:text-blue-600 hover:underline">
                        {repo.name}
                      </a>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      forked from{" "}
                      <a href={`https://github.com/${repo.forkedFrom}`} className="text-blue-600 hover:underline">
                        {repo.forkedFrom}
                      </a>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{repo.description}</p>
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
                  <div className="mb-4">
                    {repo.languages.map((lang, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs mb-1">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }}></div>
                        <span>{lang.name}</span>
                        <span className="text-muted-foreground">{lang.percentage}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                    <div className="ml-auto">Updated {repo.updatedAt}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
