import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, GitFork, GitPullRequest, GitMerge, MessageSquare, FileCode } from "lucide-react"

export function RecentActivityFeed() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        username: "sarahchen",
        avatar: "/diverse-avatars.png",
      },
      action: "starred",
      repo: "facebook/react",
      time: "5 minutes ago",
      icon: <Star className="h-4 w-4 text-yellow-500" />,
    },
    {
      id: 2,
      user: {
        name: "Alex Johnson",
        username: "alexj",
        avatar: "/diverse-avatars.png",
      },
      action: "forked",
      repo: "vercel/next.js",
      time: "15 minutes ago",
      icon: <GitFork className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      user: {
        name: "Maria Rodriguez",
        username: "mariar",
        avatar: "/diverse-avatars.png",
      },
      action: "opened a pull request in",
      repo: "tailwindlabs/tailwindcss",
      time: "32 minutes ago",
      icon: <GitPullRequest className="h-4 w-4 text-purple-500" />,
    },
    {
      id: 4,
      user: {
        name: "David Kim",
        username: "davidk",
        avatar: "/diverse-avatars.png",
      },
      action: "merged a pull request in",
      repo: "microsoft/typescript",
      time: "1 hour ago",
      icon: <GitMerge className="h-4 w-4 text-green-500" />,
    },
    {
      id: 5,
      user: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar: "/diverse-avatars.png",
      },
      action: "commented on",
      repo: "sveltejs/svelte",
      time: "2 hours ago",
      icon: <MessageSquare className="h-4 w-4 text-orange-500" />,
    },
    {
      id: 6,
      user: {
        name: "James Lee",
        username: "jameslee",
        avatar: "/diverse-avatars.png",
      },
      action: "created repository",
      repo: "jameslee/awesome-project",
      time: "3 hours ago",
      icon: <FileCode className="h-4 w-4 text-cyan-500" />,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/30 transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-1 text-sm">
              <span className="font-medium">{activity.user.name}</span>
              <span className="text-muted-foreground">@{activity.user.username}</span>
            </div>
            <p className="text-sm flex items-center gap-1.5">
              {activity.icon}
              <span>
                {activity.action}{" "}
                <a href="#" className="font-medium hover:text-primary">
                  {activity.repo}
                </a>
              </span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
