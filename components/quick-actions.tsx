"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, Users, Star, GitFork } from "lucide-react"
import { useRouter } from "next/navigation"

export function QuickActions() {
  const router = useRouter()

  return (
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button variant="outline" className="justify-start gap-2 h-10" onClick={() => router.push("/search")}>
          <Search className="h-4 w-4 text-primary" />
          <span>Search Profiles</span>
        </Button>

        <Button variant="outline" className="justify-start gap-2 h-10" onClick={() => router.push("/trends")}>
          <TrendingUp className="h-4 w-4 text-primary" />
          <span>Explore Trends</span>
        </Button>

        <Button variant="outline" className="justify-start gap-2 h-10" onClick={() => router.push("/following")}>
          <Users className="h-4 w-4 text-primary" />
          <span>View Following</span>
        </Button>

        <Button variant="outline" className="justify-start gap-2 h-10" onClick={() => router.push("/starred")}>
          <Star className="h-4 w-4 text-primary" />
          <span>Starred Repos</span>
        </Button>

        <Button variant="outline" className="justify-start gap-2 h-10" onClick={() => router.push("/forks")}>
          <GitFork className="h-4 w-4 text-primary" />
          <span>My Forks</span>
        </Button>
      </CardContent>
    </Card>
  )
}
