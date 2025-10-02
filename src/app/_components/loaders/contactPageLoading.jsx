import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function ContactPageSkeleton() {
  return (
    <>
      {/* Skeleton for Contact Information Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Skeleton className="h-12 w-3/4 md:w-1/2 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          {/* Skeleton for the four info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="border-0 text-center">
                <CardContent className="p-8">
                  <Skeleton className="w-16 h-16 rounded-2xl mx-auto mb-6" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-4" />
                  <Skeleton className="h-5 w-1/2 mx-auto mb-2" />
                  <Skeleton className="h-4 w-full mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skeleton for the three quick contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="py-6 border-0">
                <CardContent className="text-center space-y-4 pt-6">
                    <Skeleton className="w-12 h-12 rounded-full mx-auto"/>
                    <Skeleton className="h-6 w-1/2 mx-auto"/>
                    <Skeleton className="h-10 w-full rounded-full"/>
                </CardContent>
            </Card>
            <Card className="py-6 border-0">
                <CardContent className="text-center space-y-4 pt-6">
                    <Skeleton className="w-12 h-12 rounded-full mx-auto"/>
                    <Skeleton className="h-6 w-1/2 mx-auto"/>
                    <Skeleton className="h-10 w-full rounded-full"/>
                </CardContent>
            </Card>
             <Card className="py-6 border-0">
                <CardContent className="text-center space-y-4 pt-6">
                    <Skeleton className="w-12 h-12 rounded-full mx-auto"/>
                    <Skeleton className="h-6 w-1/2 mx-auto"/>
                    <Skeleton className="h-10 w-full rounded-full"/>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skeleton for Form & Map Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Skeleton */}
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-12 w-full rounded-full" />
              <Skeleton className="h-12 w-full rounded-full" />
              <Skeleton className="h-12 w-full rounded-full" />
              <Skeleton className="h-32 w-full rounded-2xl" />
              <Skeleton className="h-16 w-full rounded-full" />
            </div>
            {/* Map Skeleton */}
            <div className="space-y-8">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-96 w-full rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}