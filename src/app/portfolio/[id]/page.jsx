"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Users, Building, Award, CheckCircle } from "lucide-react"

// Project data - in a real app, this would come from a database or API
const projectsData = [
  {
    id: "0",
    title: "Modern Corporate Headquarters",
    category: "Commercial",
    description:
      "A 15-story glass and steel masterpiece featuring sustainable design elements, smart building technology, and flexible workspace solutions for 2,000+ employees.",
    fullDescription:
      "This state-of-the-art corporate headquarters represents the pinnacle of modern commercial architecture. The building features a striking glass and steel facade that maximizes natural light while maintaining energy efficiency through advanced glazing technology. The interior spaces are designed with flexibility in mind, featuring modular workstations, collaborative zones, and cutting-edge technology infrastructure.",
    details: ["15 floors", "200,000 sq ft", "LEED Platinum", "Smart Building Tech"],
    year: "2024",
    location: "Downtown District",
    client: "TechCorp Industries",
    duration: "24 months",
    budget: "$45M",
    team: "150+ professionals",
    images: [
      "/modern-construction-building-with-glass-facade-and.jpg",
      "/modern-construction-company-office-building-with-t.jpg",
      "/modern-office-building-construction-site-aerial-v.jpg",
    ],
    features: [
      "LEED Platinum Certification",
      "Smart Building Management System",
      "Rooftop Solar Array",
      "Rainwater Harvesting",
      "Electric Vehicle Charging Stations",
      "Advanced HVAC Systems",
      "Flexible Floor Plates",
      "High-Speed Elevators",
    ],
    challenges: [
      "Complex urban site with limited access",
      "Integration of advanced building systems",
      "Achieving LEED Platinum certification",
      "Coordinating with multiple stakeholders",
    ],
    awards: [
      "Best Commercial Building 2024",
      "Sustainable Design Excellence Award",
      "Innovation in Construction Award",
    ],
  },
  {
    id: "1",
    title: "Luxury Residential Complex",
    category: "Residential",
    description:
      "An exclusive 50-unit residential development combining contemporary architecture with premium amenities, rooftop gardens, and panoramic city views.",
    fullDescription:
      "This luxury residential complex redefines urban living with its sophisticated design and world-class amenities. Each unit features floor-to-ceiling windows, premium finishes, and smart home technology. The building includes a rooftop infinity pool, fitness center, concierge services, and beautifully landscaped gardens.",
    details: ["50 luxury units", "Rooftop amenities", "Underground parking", "24/7 concierge"],
    year: "2023",
    location: "Riverside Heights",
    client: "Prestige Developments",
    duration: "18 months",
    budget: "$32M",
    team: "120+ professionals",
    images: [
      "/modern-construction-building-with-glass-facade-and.jpg",
      "/modern-construction-company-office-building-with-t.jpg",
      "/modern-office-building-construction-site-aerial-v.jpg",
    ],
    features: [
      "Rooftop Infinity Pool",
      "Private Balconies",
      "Smart Home Technology",
      "Concierge Services",
      "Fitness Center & Spa",
      "Underground Parking",
      "Landscaped Gardens",
      "Premium Finishes",
    ],
    challenges: [
      "Maximizing views for all units",
      "Integrating luxury amenities",
      "Managing construction in dense urban area",
      "Coordinating high-end finishes",
    ],
    awards: ["Residential Excellence Award 2023", "Luxury Development of the Year", "Architectural Design Merit Award"],
  },
  {
    id: "2",
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    description:
      "State-of-the-art production facility with automated systems, clean room environments, and sustainable energy solutions for next-generation manufacturing.",
    fullDescription:
      "This cutting-edge manufacturing facility represents the future of industrial construction. Designed for precision manufacturing, the facility features multiple clean room environments, automated material handling systems, and advanced environmental controls. The building incorporates sustainable design principles with solar power generation and energy-efficient systems.",
    details: ["500,000 sq ft", "Automated systems", "Clean rooms", "Solar powered"],
    year: "2024",
    location: "Industrial Park",
    client: "Advanced Manufacturing Corp",
    duration: "20 months",
    budget: "$38M",
    team: "180+ professionals",
    images: [
      "/modern-construction-building-with-glass-facade-and.jpg",
      "/modern-construction-company-office-building-with-t.jpg",
      "/modern-office-building-construction-site-aerial-v.jpg",
    ],
    features: [
      "ISO Class 7 Clean Rooms",
      "Automated Material Handling",
      "Solar Power Generation",
      "Advanced HVAC Systems",
      "Precision Environmental Controls",
      "High-Bay Manufacturing Areas",
      "Quality Control Laboratories",
      "Employee Amenities",
    ],
    challenges: [
      "Meeting strict clean room standards",
      "Integrating complex automation systems",
      "Achieving energy efficiency targets",
      "Coordinating specialized equipment installation",
    ],
    awards: [
      "Industrial Excellence Award 2024",
      "Sustainable Manufacturing Facility",
      "Innovation in Industrial Design",
    ],
  },
  {
    id: "3",
    title: "Mixed-Use Urban Development",
    category: "Commercial",
    description:
      "A transformative urban project combining retail, office, and residential spaces with public plazas, green corridors, and community facilities.",
    fullDescription:
      "This mixed-use development serves as a catalyst for urban renewal, creating a vibrant community hub that seamlessly integrates commercial, residential, and public spaces. The project features ground-level retail, office spaces, residential units, and extensive public amenities including parks, plazas, and community facilities.",
    details: ["Mixed-use design", "Public spaces", "Green corridors", "Community hub"],
    year: "2023",
    location: "City Center",
    client: "Urban Development Authority",
    duration: "30 months",
    budget: "$65M",
    team: "200+ professionals",
    images: [
      "/modern-construction-building-with-glass-facade-and.jpg",
      "/modern-construction-company-office-building-with-t.jpg",
      "/modern-office-building-construction-site-aerial-v.jpg",
    ],
    features: [
      "Mixed-Use Integration",
      "Public Plaza & Parks",
      "Green Roof Systems",
      "Community Center",
      "Retail & Dining",
      "Residential Units",
      "Office Spaces",
      "Underground Parking",
    ],
    challenges: [
      "Coordinating multiple building types",
      "Creating seamless public-private integration",
      "Managing complex phasing",
      "Balancing diverse stakeholder needs",
    ],
    awards: ["Urban Development Excellence 2023", "Community Impact Award", "Mixed-Use Project of the Year"],
  },
]

export default function ProjectDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const projectId = params.id 
    const foundProject = projectsData.find((p) => p.id === projectId)
    if (foundProject) {
      setProject(foundProject)
    }
  }, [params.id])

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-foreground mb-4">Project not found</h1>
          <Button onClick={() => router.push("/")} className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}


      {/* Hero Section */}
      <section className="relative  mt-36 px-6 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {project.location}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="font-semibold text-foreground">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Team Size</p>
                    <p className="font-semibold text-foreground">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Image Gallery */}
            <div className="relative">
              <div className="aspect-[4/3] bg-card rounded-3xl overflow-hidden ">
                <img
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
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
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary font-semibold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards & Recognition */}
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8">Awards & Recognition</h2>
                <div className="space-y-4">
                  {project.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-card rounded-2xl p-6 border border-border"
                    >
                      <Award className="w-6 h-6 text-primary" />
                      <span className="text-foreground font-medium">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Client</p>
                    <p className="font-medium text-foreground">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Budget</p>
                    <p className="font-medium text-foreground">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
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
