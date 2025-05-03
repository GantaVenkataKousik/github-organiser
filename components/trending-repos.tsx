import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ArrowUpRight } from "lucide-react"

export function TrendingRepos() {
  // Mock trending repositories data
  const trendingRepos = [
    {
      name: "microsoft/vscode",
      description: "Visual Studio Code",
      stars: "152K",
      forks: "27.5K",
      language: "TypeScript",
      languageColor: "#3178c6",
      url: "https://github.com/microsoft/vscode",
    },
    {
      name: "facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces",
      stars: "207K",
      forks: "43.2K",
      language: "JavaScript",
      languageColor: "#f7df1e",
      url: "https://github.com/facebook/react",
    },
    {
      name: "vercel/next.js",
      description: "The React Framework for the Web",
      stars: "108K",
      forks: "24.3K",
      language: "JavaScript",
      languageColor: "#f7df1e",
      url: "https://github.com/vercel/next.js",
    },
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Trending Repositories</span>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            Hot
          </Badge>
        </CardTitle>
        <CardDescription>Popular repositories this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingRepos.map((repo, index) => (
            <div key={index} className="flex flex-col gap-2 p-3 rounded-md border hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm hover:text-primary flex items-center gap-1"
                >
                  {repo.name}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: repo.languageColor }}></span>
                  <span className="text-xs text-muted-foreground">{repo.language}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">{repo.description}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
