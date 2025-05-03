"use client"

import Link from "next/link"
import { Home, Search, BarChart2, Star, GitFork, Users, BookOpen, Settings, Moon, Sun, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={cn("flex h-screen w-64 flex-col border-r bg-card shadow-sm", className)}>
      <div className="flex h-16 items-center border-b px-6 bg-gradient-to-r from-primary/10 to-transparent">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Github className="h-5 w-5" />
          </div>
          <span className="text-lg tracking-tight font-poppins">GitHubStats</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto p-6">
        <div className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/15"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <BarChart2 className="h-4 w-4" />
            Analytics
          </Link>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Repositories
          </h3>
          <div className="space-y-1">
            <Link
              href="/starred"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Star className="h-4 w-4" />
              Starred
            </Link>
            <Link
              href="/forks"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <GitFork className="h-4 w-4" />
              Forks
            </Link>
            <Link
              href="/following"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Following
            </Link>
            <Link
              href="/gists"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <BookOpen className="h-4 w-4" />
              Gists
            </Link>
          </div>
        </div>
      </nav>
      <div className="border-t p-6 bg-gradient-to-t from-muted/30 to-transparent">
        <div className="flex items-center justify-between">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-auto rounded-full"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
