import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export function RecommendedUsers() {
  // Mock recommended users data
  const recommendedUsers = [
    {
      id: 1,
      name: "Emma Johnson",
      username: "emmaj",
      avatar: "/diverse-group-avatars.png",
      bio: "Full-stack developer | React, Node.js, TypeScript",
      followers: "2.4K",
    },
    {
      id: 2,
      name: "Michael Chen",
      username: "mchen",
      avatar: "/diverse-group-avatars.png",
      bio: "Software Engineer at Google | Open source contributor",
      followers: "5.7K",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      username: "sophiar",
      avatar: "/diverse-group-avatars.png",
      bio: "AI/ML Engineer | Python, TensorFlow, PyTorch",
      followers: "3.2K",
    },
  ]

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <span>Recommended Users</span>
        </CardTitle>
        <CardDescription>Developers you might want to follow</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/30 transition-colors">
              <Avatar>
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="truncate">
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">@{user.username}</p>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    Follow
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{user.bio}</p>
                <p className="text-xs mt-1">
                  <span className="font-medium">{user.followers}</span>{" "}
                  <span className="text-muted-foreground">followers</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
