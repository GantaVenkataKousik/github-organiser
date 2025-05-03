import { MainSidebar } from "@/components/main-sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DeveloperLoading() {
  return (
    <div className="flex h-screen bg-background">
      <MainSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8">
            <Skeleton className="h-10 w-64 mb-2" />
            <Skeleton className="h-6 w-96" />
          </div>

          <Card className="mb-8 overflow-hidden border border-border/50">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Skeleton className="h-36 w-36 rounded-full" />
                <div className="flex-1 text-center md:text-left space-y-4 w-full">
                  <Skeleton className="h-8 w-64 mx-auto md:mx-0" />
                  <Skeleton className="h-6 w-48 mx-auto md:mx-0" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-56 mx-auto md:mx-0" />
                    <Skeleton className="h-5 w-40 mx-auto md:mx-0" />
                    <Skeleton className="h-5 w-64 mx-auto md:mx-0" />
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Skeleton className="h-9 w-24 rounded-full" />
                    <Skeleton className="h-9 w-24 rounded-full" />
                    <Skeleton className="h-9 w-24 rounded-full" />
                    <Skeleton className="h-9 w-24 rounded-full" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <Skeleton className="h-7 w-40 mb-2" />
                <Skeleton className="h-20 w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-6">
                        <Skeleton className="h-6 w-24 mb-2" />
                        <Skeleton className="h-10 w-16 mb-2" />
                        <Skeleton className="h-4 w-32" />
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-6 flex gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-md" />
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-1" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[300px] w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-1" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[300px] w-full" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48 mb-1" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[200px] w-full" />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
