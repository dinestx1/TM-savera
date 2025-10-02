"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useDispatch, useSelector } from "react-redux"
import { getProjectsId } from "@/store/slices/dataSlice"
import { ArrowLeft, Calendar, MapPin, Users, Building, Award, CheckCircle, Loader2 } from "lucide-react"

// Helper function to format budget
const formatBudget = (num) => {
  if (!num) return "N/A"
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)} Cr`
  }
  if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2)} Lakhs`
  }
  return `₹${num.toLocaleString("en-IN")}`
}

export default function ProjectDetailsPage() {
  const dispatch = useDispatch()
  const { project, loading } = useSelector((state) => state.data)
  const params = useParams()
  const router = useRouter()

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const projectId = params.id
   
    if (projectId) {
      dispatch(getProjectsId({projectId}))
    }
  }, [params.id, dispatch])

  // Show a loading spinner while the data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-4" />
          <p className="text-xl text-muted-foreground">Loading Project Details...</p>
        </div>
      </div>
    )
  }

  // Show a "not found" message if loading is complete and no project was found
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-foreground mb-4">Project not found</h1>
          <Button onClick={() => router.push("/portfolio")} className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  // Safely extract year from CompletionDate or createdAt
  const projectYear = project.CompletionDate
    ? new Date(project.CompletionDate).getFullYear()
    : new Date(project.createdAt).getFullYear()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative mt-36 px-6 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {project.location || "Location Not Specified"}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="font-semibold text-foreground">{projectYear}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{project.location || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-semibold text-foreground">{project.teamSize || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold text-foreground">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Image Gallery */}
            <div className="relative">
              <div className="aspect-[4/3] bg-card rounded-3xl overflow-hidden">
                <img
                  src={
                    project.projectImage && project.projectImage.length > 0
                      ? `/uploads/${project.projectImage[currentImageIndex]}` // Assuming images are in /uploads/
                      : "/placeholder.svg"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Navigation */}
              {project.projectImage && project.projectImage.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {project.projectImage.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <h2 className="text-3xl font-light text-foreground mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards & Recognition */}
              {project.awards && project.awards.length > 0 && (
                <div>
                  <h2 className="text-3xl font-light text-foreground mb-8">Awards & Recognition</h2>
                  <div className="space-y-4">
                    {project.awards.map((award, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-card rounded-2xl p-6 border border-border">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="text-foreground font-medium">{award.name} - {award.year} ({award.by})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Client</p>
                    <p className="font-medium text-foreground">{project.client || "Confidential"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Budget</p>
                    <p className="font-medium text-foreground">{formatBudget(project.budget)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="font-medium text-foreground">{project.status}</p>
                  </div>
                   <div>
                    <p className="text-sm text-muted-foreground mb-1">Manager</p>
                    <p className="font-medium text-foreground">{project.manager}</p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Interested in Similar Work?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can bring your vision to life with our expertise.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}