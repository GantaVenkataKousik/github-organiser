"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
}

export function ActiveNavItem({ href, icon, label }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className="flex flex-col items-center gap-1 text-center">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-md",
          isActive ? "bg-primary-600 text-white" : "bg-primary-800 text-white hover:bg-primary-600",
        )}
      >
        {icon}
      </div>
      <span className={cn("text-xs", isActive ? "text-white" : "text-white/80")}>{label}</span>
    </Link>
  )
}
