"use client"

import { useState } from "react"
import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Code, Star, GitFork, SlidersHorizontal, BookOpen, MapPin, Building } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [searchType, setSearchType] = useState("users")
  const [showFilters, setShowFilters] = useState(false)

  // Mock search results
  const userResults = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      avatar: "/diverse-group-avatars.png",
      bio: "Full-stack developer passionate about React, Node.js, and open source",
      location: "San Francisco, CA",
      company: "GitHub",
      followers: 1245,
      following: 328,
      repositories: 87,
      url: "https://github.com/johndoe",
      languages: ["JavaScript", "TypeScript", "Python"],
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/diverse-group-avatars.png",
      bio: "Software engineer specializing in machine learning and AI",
      location: "New York, NY",
      company: "Google",
      followers: 2567,
      following: 156,
      repositories: 42,
      url: "https://github.com/janesmith",
      languages: ["Python", "C++", "JavaScript"],
    },
    {
      id: 3,
      name: "Alex Johnson",
      username: "alexjohnson",
      avatar: "/diverse-group-avatars.png",
      bio: "Mobile app developer and UI/UX enthusiast",
      location: "Seattle, WA",
      company: "Microsoft",
      followers: 876,
      following: 245,
      repositories: 63,
      url: "https://github.com/alexjohnson",
      languages: ["Swift", "Kotlin", "JavaScript"],
    },
    {
      id: 4,
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "/diverse-group-avatars.png",
      bio: "Backend developer with a focus on scalable systems",
      location: "Austin, TX",
      company: "Amazon",
      followers: 1823,
      following: 412,
      repositories: 95,
      url: "https://github.com/sarahchen",
      languages: ["Go", "Rust", "Python"],
    },
    {
      id: 5,
      name: "Michael Brown",
      username: "michaelbrown",
      avatar: "/diverse-group-avatars.png",
      bio: "DevOps engineer and cloud architecture specialist",
      location: "Chicago, IL",
      company: "Netflix",
      followers: 934,
      following: 187,
      repositories: 56,
      url: "https://github.com/michaelbrown",
      languages: ["Python", "Bash", "Terraform"],
    },
  ]

  const repoResults = [
    {
      id: 1,
      name: "awesome-react",
      fullName: "johndoe/awesome-react",
      description: "A curated list of awesome React libraries, tools, and resources",
      stars: 3245,
      forks: 567,
      language: "JavaScript",
      languageColor: "#f7df1e",
      updatedAt: "2 days ago",
      url: "https://github.com/johndoe/awesome-react",
      topics: ["react", "javascript", "frontend", "web-development"],
    },
    {
      id: 2,
      name: "machine-learning-projects",
      fullName: "janesmith/machine-learning-projects",
      description: "Collection of practical machine learning projects with tutorials",
      stars: 1876,
      forks: 432,
      language: "Python",
      languageColor: "#3776ab",
      updatedAt: "1 week ago",
      url: "https://github.com/janesmith/machine-learning-projects",
      topics: ["machine-learning", "python", "data-science", "ai"],
    },
    {
      id: 3,
      name: "mobile-ui-kit",
      fullName: "alexjohnson/mobile-ui-kit",
      description: "A comprehensive UI kit for modern mobile applications",
      stars: 945,
      forks: 213,
      language: "Swift",
      languageColor: "#ffac45",
      updatedAt: "3 days ago",
      url: "https://github.com/alexjohnson/mobile-ui-kit",
      topics: ["ui", "mobile", "swift", "design"],
    },
    {
      id: 4,
      name: "distributed-systems",
      fullName: "sarahchen/distributed-systems",
      description: "Examples and patterns for building distributed systems",
      stars: 2134,
      forks: 387,
      language: "Go",
      languageColor: "#00add8",
      updatedAt: "5 days ago",
      url: "https://github.com/sarahchen/distributed-systems",
      topics: ["distributed-systems", "go", "backend", "scalability"],
    },
    {
      id: 5,
      name: "cloud-deployment-templates",
      fullName: "michaelbrown/cloud-deployment-templates",
      description: "Ready-to-use templates for deploying applications to various cloud providers",
      stars: 1567,
      forks: 298,
      language: "Terraform",
      languageColor: "#7b42bc",
      updatedAt: "1 day ago",
      url: "https://github.com/michaelbrown/cloud-deployment-templates",
      topics: ["devops", "cloud", "terraform", "infrastructure"],
    },
  ]

  const handleSearch = () => {
    if (!searchQuery) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setHasSearched(true)
    }, 1500)
  }

  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Search</h1>
            <p className="text-muted-foreground mt-2">Find users, repositories, and more on GitHub</p>
          </div>

          <Card className="mb-8 overflow-hidden border border-border/50 card-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search GitHub..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 h-12 text-base font-medium"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={searchType} onValueChange={setSearchType}>
                      <SelectTrigger className="w-[140px] h-12">
                        <SelectValue placeholder="Search type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="users">Users</SelectItem>
                        <SelectItem value="repositories">Repositories</SelectItem>
                        <SelectItem value="code">Code</SelectItem>
                        <SelectItem value="issues">Issues</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="h-12 w-12" onClick={() => setShowFilters(!showFilters)}>
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={handleSearch}
                      disabled={isLoading}
                      className="gap-2 h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium"
                    >
                      {isLoading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4" />
                          Search
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Languages</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"].map((lang) => (
                          <div key={lang} className="flex items-center space-x-2">
                            <Checkbox id={`lang-${lang}`} />
                            <Label htmlFor={`lang-${lang}`} className="text-sm">
                              {lang}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Sort by</h3>
                      <Select defaultValue="best-match">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="best-match">Best match</SelectItem>
                          <SelectItem value="most-stars">Most stars</SelectItem>
                          <SelectItem value="most-forks">Most forks</SelectItem>
                          <SelectItem value="recently-updated">Recently updated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Advanced filters</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="filter-archived" />
                          <Label htmlFor="filter-archived" className="text-sm">
                            Include archived
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="filter-forks" />
                          <Label htmlFor="filter-forks" className="text-sm">
                            Include forks
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="filter-templates" />
                          <Label htmlFor="filter-templates" className="text-sm">
                            Include templates
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {hasSearched && (
            <div className="mb-8">
              <Tabs defaultValue={searchType} onValueChange={setSearchType} className="w-full">
                <TabsList className="mb-6 bg-card border border-border/50 p-1">
                  <TabsTrigger
                    value="users"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Users
                  </TabsTrigger>
                  <TabsTrigger
                    value="repositories"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Repositories
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="issues"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Issues
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="users">
                  <div className="space-y-6">
                    {userResults.map((user) => (
                      <Card key={user.id} className="overflow-hidden card-hover-effect card-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                              <Avatar className="h-20 w-20">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                <div>
                                  <h2 className="text-xl font-bold">{user.name}</h2>
                                  <p className="text-muted-foreground">@{user.username}</p>
                                </div>
                                <Button variant="outline" className="gap-2 self-start" asChild>
                                  <a href={user.url} target="_blank" rel="noopener noreferrer">
                                    View Profile
                                  </a>
                                </Button>
                              </div>

                              <p className="mt-2">{user.bio}</p>

                              <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-sm">
                                {user.location && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>{user.location}</span>
                                  </div>
                                )}
                                {user.company && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <Building className="h-4 w-4" />
                                    <span>{user.company}</span>
                                  </div>
                                )}
                              </div>

                              <div className="mt-4 flex flex-wrap gap-2">
                                {user.languages.map((language, index) => (
                                  <Badge key={index} variant="outline">
                                    {language}
                                  </Badge>
                                ))}
                              </div>

                              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 text-primary" />
                                  <span>
                                    <strong>{user.followers}</strong> followers
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 text-primary" />
                                  <span>
                                    <strong>{user.following}</strong> following
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Code className="h-4 w-4 text-primary" />
                                  <span>
                                    <strong>{user.repositories}</strong> repositories
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="repositories">
                  <div className="space-y-6">
                    {repoResults.map((repo) => (
                      <Card key={repo.id} className="overflow-hidden card-hover-effect card-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <h2 className="text-xl font-bold">
                                  <a
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary"
                                  >
                                    {repo.name}
                                  </a>
                                </h2>
                                <p className="text-muted-foreground">{repo.fullName}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-yellow-500" />
                                  <span>{repo.stars}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <GitFork className="h-4 w-4 text-blue-500" />
                                  <span>{repo.forks}</span>
                                </div>
                              </div>
                            </div>

                            <p>{repo.description}</p>

                            <div className="flex flex-wrap gap-2">
                              {repo.topics.map((topic, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-primary/10 text-primary hover:bg-primary/20"
                                >
                                  {topic}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                              <div className="flex items-center gap-2">
                                <span
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: repo.languageColor }}
                                ></span>
                                <span>{repo.language}</span>
                              </div>
                              <div className="text-muted-foreground">Updated {repo.updatedAt}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="code">
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle>Code Search</CardTitle>
                      <CardDescription>Search for specific code snippets across GitHub</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center p-12 text-muted-foreground">
                        <p>Enter a search query to find code snippets</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="issues">
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle>Issues Search</CardTitle>
                      <CardDescription>Search for issues across GitHub repositories</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center p-12 text-muted-foreground">
                        <p>Enter a search query to find issues</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {!hasSearched && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Search GitHub</h2>
              <p className="text-muted-foreground max-w-md">
                Enter a username, repository name, or keyword to search across GitHub and discover users, repositories,
                code, and issues.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
