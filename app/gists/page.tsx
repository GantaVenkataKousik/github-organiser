"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Star, GitFork, FileCode, Code } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for gists
const gists = [
  {
    id: "gist1",
    description: "React hooks for handling form state",
    files: ["useForm.js", "useField.js", "README.md"],
    created: "2023-05-15",
    updated: "2023-06-02",
    stars: 24,
    forks: 8,
    comments: 5,
    language: "JavaScript",
    public: true,
  },
  {
    id: "gist2",
    description: "TypeScript utility types for React components",
    files: ["types.ts", "example.tsx"],
    created: "2023-04-10",
    updated: "2023-05-20",
    stars: 18,
    forks: 4,
    comments: 2,
    language: "TypeScript",
    public: true,
  },
  {
    id: "gist3",
    description: "CSS Grid layout examples",
    files: ["grid-examples.css", "index.html"],
    created: "2023-03-22",
    updated: "2023-04-15",
    stars: 12,
    forks: 3,
    comments: 1,
    language: "CSS",
    public: true,
  },
  {
    id: "gist4",
    description: "Python script for data processing",
    files: ["process_data.py", "requirements.txt"],
    created: "2023-02-18",
    updated: "2023-03-05",
    stars: 9,
    forks: 2,
    comments: 3,
    language: "Python",
    public: true,
  },
  {
    id: "gist5",
    description: "Bash scripts for development environment setup",
    files: ["setup.sh", "install-deps.sh", "README.md"],
    created: "2023-01-30",
    updated: "2023-02-10",
    stars: 15,
    forks: 6,
    comments: 4,
    language: "Shell",
    public: true,
  },
  {
    id: "gist6",
    description: "Private notes on project architecture",
    files: ["architecture.md", "diagrams.svg"],
    created: "2023-06-01",
    updated: "2023-06-05",
    stars: 0,
    forks: 0,
    comments: 0,
    language: "Markdown",
    public: false,
  },
]

// Language color mapping
const languageColors = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  CSS: "#1572b6",
  Python: "#3776ab",
  Shell: "#89e051",
  Markdown: "#083fa1",
}

export default function GistsPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Gists</h1>
            <p className="text-muted-foreground mt-2">Code snippets and notes</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search gists..." className="w-full pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All gists</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
              <Button className="gap-2">
                <Code className="h-4 w-4" />
                Create
              </Button>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {gists.map((gist) => (
              <Card key={gist.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-lg">{gist.description || "Untitled"}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>Created on {gist.created}</span>
                        <span>•</span>
                        <span>Updated {gist.updated}</span>
                        {!gist.public && (
                          <>
                            <span>•</span>
                            <Badge
                              variant="outline"
                              className="text-xs bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                            >
                              Private
                            </Badge>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Star className="h-4 w-4" />
                        <span>{gist.stars}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{gist.forks}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {gist.files.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <FileCode className="h-4 w-4 text-muted-foreground" />
                        <span>{file}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: languageColors[gist.language] || "#ccc" }}
                      ></div>
                      <span className="text-xs">{gist.language}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                      <span>{gist.comments} comments</span>
                    </div>
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
