import { MainSidebar } from "@/components/main-sidebar"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingTemplate() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-4 w-48 mt-2" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Skeleton className="h-[300px] rounded-xl" />
            <Skeleton className="h-[300px] rounded-xl" />
            <Skeleton className="h-[300px] rounded-xl" />
          </div>
          <div className="mt-8">
            <Skeleton className="h-[400px] rounded-xl" />
          </div>
        </main>
      </div>
    </div>
  )
}
