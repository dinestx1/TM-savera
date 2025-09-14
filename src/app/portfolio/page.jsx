"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Filter, Grid, List } from "lucide-react"

const projectsData = [
  {
    id: 0,
    title: "Modern Corporate Headquarters",
    category: "Commercial",
    description:
      "A 15-story glass and steel masterpiece featuring sustainable design elements, smart building technology, and flexible workspace solutions for 2,000+ employees.",
    details: ["15 floors", "200,000 sq ft", "LEED Platinum", "Smart Building Tech"],
    year: "2024",
    location: "Downtown District",
    status: "Completed",
    budget: "$50M+",
    duration: "24 months",
  },
  {
    id: 1,
    title: "Luxury Residential Complex",
    category: "Residential",
    description:
      "An exclusive 50-unit residential development combining contemporary architecture with premium amenities, rooftop gardens, and panoramic city views.",
    details: ["50 luxury units", "Rooftop amenities", "Underground parking", "24/7 concierge"],
    year: "2023",
    location: "Riverside Heights",
    status: "Completed",
    budget: "$35M+",
    duration: "18 months",
  },
  {
    id: 2,
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    description:
      "State-of-the-art production facility with automated systems, clean room environments, and sustainable energy solutions for next-generation manufacturing.",
    details: ["500,000 sq ft", "Automated systems", "Clean rooms", "Solar powered"],
    year: "2024",
    location: "Industrial Park",
    status: "Completed",
    budget: "$75M+",
    duration: "30 months",
  },
  {
    id: 3,
    title: "Mixed-Use Urban Development",
    category: "Commercial",
    description:
      "A transformative urban project combining retail, office, and residential spaces with public plazas, green corridors, and community facilities.",
    details: ["Mixed-use design", "Public spaces", "Green corridors", "Community hub"],
    year: "2023",
    location: "City Center",
    status: "Completed",
    budget: "$120M+",
    duration: "36 months",
  },
  {
    id: 4,
    title: "Sustainable Office Complex",
    category: "Commercial",
    description:
      "An eco-friendly office development with renewable energy systems, green roofs, and innovative water management solutions.",
    details: ["LEED Gold", "Solar panels", "Green roof", "Rainwater harvesting"],
    year: "2022",
    location: "Tech District",
    status: "Completed",
    budget: "$40M+",
    duration: "20 months",
  },
  {
    id: 5,
    title: "Healthcare Innovation Center",
    category: "Healthcare",
    description:
      "A cutting-edge medical facility featuring advanced diagnostic equipment, research laboratories, and patient-centered design.",
    details: ["Research labs", "Advanced diagnostics", "Patient-centered", "Emergency ready"],
    year: "2023",
    location: "Medical District",
    status: "Completed",
    budget: "$85M+",
    duration: "28 months",
  },
  {
    id: 6,
    title: "Educational Campus Expansion",
    category: "Educational",
    description:
      "Modern academic buildings with flexible learning spaces, technology integration, and sustainable design principles.",
    details: ["Flexible classrooms", "Tech integration", "Sustainable design", "Student facilities"],
    year: "2022",
    location: "University District",
    status: "Completed",
    budget: "$60M+",
    duration: "24 months",
  },
  {
    id: 7,
    title: "Luxury Hotel & Conference Center",
    category: "Hospitality",
    description:
      "A premium hospitality destination featuring luxury accommodations, world-class conference facilities, and exceptional amenities.",
    details: ["200 rooms", "Conference center", "Spa & wellness", "Fine dining"],
    year: "2024",
    location: "Business District",
    status: "In Progress",
    budget: "$95M+",
    duration: "32 months",
  },
]

const categories = ["All", "Commercial", "Residential", "Industrial", "Healthcare", "Educational", "Hospitality"]
const years = ["All", "2024", "2023", "2022"]
const statuses = ["All", "Completed", "In Progress"]

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    let filtered = projectsData

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    // Filter by year
    if (selectedYear !== "All") {
      filtered = filtered.filter((project) => project.year === selectedYear)
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter((project) => project.status === selectedStatus)
    }

    setFilteredProjects(filtered)
  }, [searchTerm, selectedCategory, selectedYear, selectedStatus])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedYear("All")
    setSelectedStatus("All")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/60 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of construction projects spanning commercial, residential, industrial,
            and specialized developments.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-6 bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>

            {/* Filter Toggle and View Mode */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>

              <div className="flex items-center gap-2 bg-background rounded-lg p-1 border border-border">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 p-6 bg-background rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="text-xs"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Year</label>
                  <div className="flex flex-wrap gap-2">
                    {years.map((year) => (
                      <Button
                        key={year}
                        variant={selectedYear === year ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedYear(year)}
                        className="text-xs"
                      >
                        {year}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Status</label>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => (
                      <Button
                        key={status}
                        variant={selectedStatus === status ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(status)}
                        className="text-xs"
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projectsData.length} projects
                </p>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={
                    viewMode === "grid"
                      ? "group"
                      : "group flex flex-col lg:flex-row gap-8 bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  }
                >
                  <Link href={`/portfolio/${project.id}`} className={viewMode === "grid" ? "block" : "flex-shrink-0"}>
                    <div
                      className={`relative overflow-hidden rounded-xl ${viewMode === "grid" ? "aspect-[4/3] mb-6" : "w-full lg:w-80 aspect-[4/3]"}`}
                    >
                      <img
                        src={`/modern-abstract-sculpture.png?key=t6606&height=300&width=400&query=modern ${project.category.toLowerCase()} building construction project`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-700 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-700 border border-yellow-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-card text-foreground hover:bg-card/90 rounded-full px-6 py-2 font-semibold">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>

                  <div className={viewMode === "grid" ? "" : "flex-1"}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground font-medium">{project.location}</span>
                    </div>

                    <Link href={`/portfolio/${project.id}`}>
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Year</span>
                        <p className="font-semibold text-foreground">{project.year}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Budget</span>
                        <p className="font-semibold text-foreground">{project.budget}</p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.details.slice(0, 3).map((detail, index) => (
                        <span key={index} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">
                          {detail}
                        </span>
                      ))}
                    </div>

                    <Link href={`/portfolio/${project.id}`}>
                      <Button className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
