"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Search,
  BarChart2,
  Star,
  GitFork,
  Users,
  BookOpen,
  Settings,
  Moon,
  Sun,
  Github,
  Code,
  Compass,
  TrendingUp,
  Activity,
  PieChart,
  User,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function MainSidebar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => pathname === path

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div 
      className={cn(
        "flex h-screen flex-col bg-slate-50 dark:bg-slate-900 border-r border-border/40 transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className={cn("flex h-16 items-center", collapsed ? "justify-center px-2" : "px-4")}>
        {collapsed ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
            <Github className="h-6 w-6" />
          </div>
        ) : (
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-white">
              <Github className="h-6 w-6" />
            </div>
            <span className="text-xl tracking-tight">GitHubStats</span>
          </Link>
        )}
      </div>

      <div className="mx-2 flex justify-end">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="h-8 w-8 rounded-full"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 overflow-auto p-2">
        <div className="space-y-1">
          <Link
            href="/"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              collapsed ? "justify-center px-2" : "gap-3",
              isActive("/")
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
            )}
            title="Dashboard"
          >
            <Home className="h-4 w-4" />
            {!collapsed && <span>Dashboard</span>}
          </Link>

          <Link
            href="/search"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              collapsed ? "justify-center px-2" : "gap-3",
              isActive("/search")
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
            )}
            title="Search"
          >
            <Search className="h-4 w-4" />
            {!collapsed && <span>Search</span>}
          </Link>

          <Link
            href="/analytics"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              collapsed ? "justify-center px-2" : "gap-3",
              isActive("/analytics")
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
            )}
            title="Analytics"
          >
            <BarChart2 className="h-4 w-4" />
            {!collapsed && <span>Analytics</span>}
          </Link>

          <Link
            href="/explore"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              collapsed ? "justify-center px-2" : "gap-3",
              isActive("/explore")
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
            )}
            title="Explore"
          >
            <Compass className="h-4 w-4" />
            {!collapsed && <span>Explore</span>}
          </Link>

          <Link
            href="/trends"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              collapsed ? "justify-center px-2" : "gap-3",
              isActive("/trends")
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
            )}
            title="Trends"
          >
            <TrendingUp className="h-4 w-4" />
            {!collapsed && <span>Trends</span>}
          </Link>
        </div>

        <div className="mt-6">
          {!collapsed && (
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Repositories
            </h3>
          )}
          <div className="space-y-1">
            <Link
              href="/starred"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/starred")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Starred"
            >
              <Star className="h-4 w-4" />
              {!collapsed && <span>Starred</span>}
            </Link>

            <Link
              href="/forks"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/forks")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Forks"
            >
              <GitFork className="h-4 w-4" />
              {!collapsed && <span>Forks</span>}
            </Link>

            <Link
              href="/following"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/following")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Following"
            >
              <Users className="h-4 w-4" />
              {!collapsed && <span>Following</span>}
            </Link>

            <Link
              href="/gists"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/gists")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Gists"
            >
              <BookOpen className="h-4 w-4" />
              {!collapsed && <span>Gists</span>}
            </Link>

            <Link
              href="/repositories"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/repositories")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Repositories"
            >
              <Code className="h-4 w-4" />
              {!collapsed && <span>Repositories</span>}
            </Link>
          </div>
        </div>

        <div className="mt-6">
          {!collapsed && (
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Reports
            </h3>
          )}
          <div className="space-y-1">
            <Link
              href="/activity"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/activity")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Activity"
            >
              <Activity className="h-4 w-4" />
              {!collapsed && <span>Activity</span>}
            </Link>

            <Link
              href="/languages"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/languages")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Languages"
            >
              <PieChart className="h-4 w-4" />
              {!collapsed && <span>Languages</span>}
            </Link>
          </div>
        </div>
        <div className="mt-6">
          {!collapsed && (
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Developer
            </h3>
          )}
          <div className="space-y-1">
            <Link
              href="/developer"
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                collapsed ? "justify-center px-2" : "gap-3",
                isActive("/developer")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Developer"
            >
              <User className="h-4 w-4" />
              {!collapsed && <span>Developer</span>}
            </Link>
          </div>
        </div>
      </nav>

      <div className={cn("border-t p-4", collapsed && "flex justify-center p-2")}>
        {!collapsed ? (
          <div className="flex items-center justify-between">
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                isActive("/settings")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </Button>
            <Link
              href="/settings"
              className={cn(
                "flex items-center justify-center rounded-full p-2",
                isActive("/settings")
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
              )}
              title="Settings"
            >
              <Settings className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
