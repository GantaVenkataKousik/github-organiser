import { Star, GitFork, Eye, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageBar } from "@/components/language-bar"

interface RepositoryCardProps {
  name: string
  description: string
  stars: number
  forks: number
  watchers: number
  updatedAt: string
  languages: {
    name: string
    percentage: number
    color: string
  }[]
  topics: string[]
  url: string
}

export function RepositoryCard({
  name,
  description,
  stars,
  forks,
  watchers,
  updatedAt,
  languages,
  topics,
  url,
}: RepositoryCardProps) {
  return (
    <Card className="repo-card overflow-hidden border border-border/50 hover:border-primary/30 card-shadow">
      <CardHeader className="pb-2 bg-gradient-to-r from-muted/30 to-transparent">
        <CardTitle className="text-lg font-semibold">
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {name}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2 pt-4">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">{description || "No description"}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {topics.map((topic, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary hover:bg-primary/20"
            >
              {topic}
            </Badge>
          ))}
        </div>
        <div className="mt-4">
          <LanguageBar languages={languages} className="h-2" />
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {languages.slice(0, 3).map((lang, index) => (
              <div key={index} className="flex items-center">
                <span
                  className="mr-1.5 inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: lang.color }}
                ></span>
                <span>
                  {lang.name} {lang.percentage.toFixed(1)}%
                </span>
              </div>
            ))}
            {languages.length > 3 && <div>+{languages.length - 3} more</div>}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" />
            <span>{forks}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>{watchers}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          <span>Updated {updatedAt}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
