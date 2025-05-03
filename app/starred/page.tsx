"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Star } from "lucide-react"
import { RepositoryCard } from "@/components/repository-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for starred repositories
const starredRepos = [
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
  {
    name: "tensorflow",
    description: "An end-to-end open source machine learning platform",
    stars: 172000,
    forks: 87500,
    watchers: 9800,
    updatedAt: "1 day ago",
    languages: [
      { name: "Python", percentage: 65, color: "#3776ab" },
      { name: "C++", percentage: 25, color: "#f34b7d" },
      { name: "JavaScript", percentage: 10, color: "#f7df1e" },
    ],
    topics: ["machine-learning", "ai", "deep-learning", "neural-networks"],
    url: "https://github.com/tensorflow/tensorflow",
  },
  {
    name: "vscode",
    description: "Visual Studio Code",
    stars: 142000,
    forks: 25300,
    watchers: 7600,
    updatedAt: "2 days ago",
    languages: [
      { name: "TypeScript", percentage: 85, color: "#3178c6" },
      { name: "JavaScript", percentage: 10, color: "#f7df1e" },
      { name: "CSS", percentage: 5, color: "#1572b6" },
    ],
    topics: ["editor", "ide", "typescript", "microsoft"],
    url: "https://github.com/microsoft/vscode",
  },
  {
    name: "flutter",
    description: "Flutter makes it easy and fast to build beautiful apps for mobile and beyond",
    stars: 148000,
    forks: 23400,
    watchers: 8200,
    updatedAt: "1 day ago",
    languages: [
      { name: "Dart", percentage: 90, color: "#00B4AB" },
      { name: "C++", percentage: 7, color: "#f34b7d" },
      { name: "CMake", percentage: 3, color: "#DA3434" },
    ],
    topics: ["flutter", "mobile", "dart", "ui-toolkit"],
    url: "https://github.com/flutter/flutter",
  },
]

export default function StarredPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Starred Repositories</h1>
            <p className="text-muted-foreground mt-2">Repositories you've starred</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Find a repository..." className="w-full pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="recently-starred">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recently-starred">Recently starred</SelectItem>
                  <SelectItem value="recently-active">Recently active</SelectItem>
                  <SelectItem value="most-stars">Most stars</SelectItem>
                  <SelectItem value="least-stars">Least stars</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All languages</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {starredRepos.map((repo, index) => (
              <RepositoryCard key={index} {...repo} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <Star className="h-4 w-4" />
              Load more
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
