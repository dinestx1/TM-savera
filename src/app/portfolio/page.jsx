"use client"

import { useState, useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useSelector,useDispatch } from "react-redux"
import { Search, Filter, Grid, List } from "lucide-react"

import { getProjects } from "@/store/slices/dataSlice"

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
 
  
  const dispatch = useDispatch()
  const {projects,loading} = useSelector((state) => state.data)

  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  useEffect(() => {

    dispatch(getProjects());

  }, [dispatch])

  useEffect(() => {
    let filtered = projects 

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
  }, [searchTerm, selectedCategory, selectedYear, selectedStatus,projects])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedYear("All")
    setSelectedStatus("All")
  }




  return (
   <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-bgdark via-gray-800 to-bgdark overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-background max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of construction projects across residential, commercial, and industrial categories.
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

            {/* Filter & View */}
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

          {showFilters && (
            <div className="mt-6 p-6 bg-background rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Status</label>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => (
                      <Button
                        key={status}
                        variant={selectedStatus === status ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(status)}
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects?.length} of {projects?.length || 0} projects
                </p>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading projects...</p>
          ) : filteredProjects?.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
              {filteredProjects?.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <Link href={`/portfolio/${project.id}`}>
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                      <img
                        src={project.projectImage?.[0] || "/placeholder.png"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Status */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "COMPLETED"
                              ? "bg-green-500/20 text-green-700 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-700 border border-yellow-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.aboutProject}</p>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase">Budget</span>
                      <p className="font-semibold">₹{project.budget?.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase">Manager</span>
                      <p className="font-semibold">{project.manager}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.keyFeatures?.slice(0, 3).map((feature, i) => (
                      <span key={i} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link href={`/portfolio/${project.id}`}>
                    <Button className="w-full">View Project</Button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
