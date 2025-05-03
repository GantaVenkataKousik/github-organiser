import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TopContributors() {
  // Mock top contributors data
  const contributors = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "alexj",
      avatar: "/diverse-group-avatars.png",
      contributions: 427,
      rank: 1,
      topLanguages: ["JavaScript", "TypeScript", "Python"],
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "sarahc",
      avatar: "/diverse-group-avatars.png",
      contributions: 385,
      rank: 2,
      topLanguages: ["Rust", "Go", "C++"],
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      username: "miguelr",
      avatar: "/diverse-group-avatars.png",
      contributions: 352,
      rank: 3,
      topLanguages: ["Python", "JavaScript", "Java"],
    },
    {
      id: 4,
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "/diverse-group-avatars.png",
      contributions: 318,
      rank: 4,
      topLanguages: ["TypeScript", "React", "CSS"],
    },
    {
      id: 5,
      name: "David Kim",
      username: "davidk",
      avatar: "/diverse-group-avatars.png",
      contributions: 294,
      rank: 5,
      topLanguages: ["Java", "Kotlin", "Swift"],
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-medium">Rank</th>
            <th className="text-left py-3 px-4 font-medium">User</th>
            <th className="text-left py-3 px-4 font-medium">Contributions</th>
            <th className="text-left py-3 px-4 font-medium">Top Languages</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor) => (
            <tr key={contributor.id} className="border-b hover:bg-muted/30">
              <td className="py-3 px-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-medium">
                  {contributor.rank}
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                    <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{contributor.name}</p>
                    <p className="text-xs text-muted-foreground">@{contributor.username}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="font-medium">{contributor.contributions}</div>
              </td>
              <td className="py-3 px-4">
                <div className="flex flex-wrap gap-1">
                  {contributor.topLanguages.map((language, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
