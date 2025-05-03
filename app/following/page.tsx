"use client"

import { MainSidebar } from "@/components/main-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for following users
const followingUsers = [
  {
    name: "Sarah Chen",
    username: "sarahchen",
    avatar: "S",
    bio: "Full-stack developer specializing in React and Node.js",
    followers: 12500,
    following: 245,
    repositories: 48,
    location: "San Francisco, CA",
    company: "Tech Innovations Inc.",
  },
  {
    name: "Alex Johnson",
    username: "alexjohnson",
    avatar: "A",
    bio: "Machine learning engineer and open source contributor",
    followers: 8700,
    following: 178,
    repositories: 62,
    location: "New York, NY",
    company: "AI Solutions",
  },
  {
    name: "Maria Rodriguez",
    username: "mariarodriguez",
    avatar: "M",
    bio: "Frontend developer and UI/UX enthusiast",
    followers: 6300,
    following: 312,
    repositories: 37,
    location: "Barcelona, Spain",
    company: "Design Systems Co.",
  },
  {
    name: "James Wilson",
    username: "jameswilson",
    avatar: "J",
    bio: "DevOps engineer and cloud architecture specialist",
    followers: 4200,
    following: 156,
    repositories: 29,
    location: "London, UK",
    company: "Cloud Platforms Ltd.",
  },
  {
    name: "Emily Zhang",
    username: "emilyzhang",
    avatar: "E",
    bio: "Mobile app developer and Swift enthusiast",
    followers: 5800,
    following: 203,
    repositories: 41,
    location: "Toronto, Canada",
    company: "Mobile Innovations",
  },
  {
    name: "David Kim",
    username: "davidkim",
    avatar: "D",
    bio: "Backend developer specializing in Go and distributed systems",
    followers: 7400,
    following: 189,
    repositories: 53,
    location: "Seoul, South Korea",
    company: "Distributed Tech",
  },
]

// Mock data for following organizations
const followingOrgs = [
  {
    name: "Microsoft",
    username: "microsoft",
    avatar: "M",
    description: "Empowering every person and every organization on the planet to achieve more",
    repositories: 4800,
    members: 5600,
    location: "Redmond, WA",
  },
  {
    name: "Google",
    username: "google",
    avatar: "G",
    description: "Google's official GitHub organization",
    repositories: 2300,
    members: 4200,
    location: "Mountain View, CA",
  },
  {
    name: "Facebook",
    username: "facebook",
    avatar: "F",
    description: "We are working to build community through open source technology",
    repositories: 1800,
    members: 3100,
    location: "Menlo Park, CA",
  },
]

export default function FollowingPage() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Following</h1>
            <p className="text-muted-foreground mt-2">Users and organizations you follow</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Find someone you're following..." className="w-full pl-10" />
            </div>
          </div>

          <Tabs defaultValue="users" className="w-full mb-8">
            <TabsList className="mb-6 bg-card border border-border/50 p-1">
              <TabsTrigger value="users" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Users
              </TabsTrigger>
              <TabsTrigger
                value="organizations"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Organizations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {followingUsers.map((user, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                          {user.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">@{user.username}</p>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Unfollow
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{user.bio}</p>
                      <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                        <div className="flex flex-col items-center p-2 rounded-md bg-slate-50 dark:bg-slate-800">
                          <span className="font-medium">{user.repositories}</span>
                          <span className="text-xs text-muted-foreground">Repos</span>
                        </div>
                        <div className="flex flex-col items-center p-2 rounded-md bg-slate-50 dark:bg-slate-800">
                          <span className="font-medium">{user.followers.toLocaleString()}</span>
                          <span className="text-xs text-muted-foreground">Followers</span>
                        </div>
                        <div className="flex flex-col items-center p-2 rounded-md bg-slate-50 dark:bg-slate-800">
                          <span className="font-medium">{user.following}</span>
                          <span className="text-xs text-muted-foreground">Following</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {user.company && (
                          <div className="flex items-center gap-1 mb-1">
                            <Code className="h-3 w-3" />
                            <span>{user.company}</span>
                          </div>
                        )}
                        {user.location && (
                          <div className="flex items-center gap-1">
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
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                            <span>{user.location}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="organizations">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {followingOrgs.map((org, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                          {org.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium">{org.name}</h3>
                          <p className="text-sm text-muted-foreground">@{org.username}</p>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Unfollow
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{org.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                        <div className="flex flex-col items-center p-2 rounded-md bg-slate-50 dark:bg-slate-800">
                          <span className="font-medium">{org.repositories.toLocaleString()}</span>
                          <span className="text-xs text-muted-foreground">Repositories</span>
                        </div>
                        <div className="flex flex-col items-center p-2 rounded-md bg-slate-50 dark:bg-slate-800">
                          <span className="font-medium">{org.members.toLocaleString()}</span>
                          <span className="text-xs text-muted-foreground">Members</span>
                        </div>
                      </div>
                      {org.location && (
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <span>{org.location}</span>
                        </div>
                      )}
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
