"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Square, Users, Filter, Search, ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Corporate Headquarters",
    category: "Commercial",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "A 15-story glass and steel masterpiece featuring sustainable design elements, smart building technology, and flexible workspace solutions for 2,000+ employees.",
    details: {
      size: "200,000 sq ft",
      floors: "15 floors",
      certification: "LEED Platinum",
      capacity: "2,000+ employees"
    },
    year: "2024",
    location: "Downtown District",
    budget: "$45M",
    duration: "24 months"
  },
  {
    id: 2,
    title: "Luxury Residential Complex",
    category: "Residential",
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "An exclusive 50-unit residential development combining contemporary architecture with premium amenities, rooftop gardens, and panoramic city views.",
    details: {
      units: "50 luxury units",
      amenities: "Rooftop gardens",
      parking: "Underground garage",
      service: "24/7 concierge"
    },
    year: "2023",
    location: "Riverside Heights",
    budget: "$28M",
    duration: "18 months"
  },
  {
    id: 3,
    title: "Advanced Manufacturing Facility",
    category: "Industrial",
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "State-of-the-art production facility with automated systems, clean room environments, and sustainable energy solutions for next-generation manufacturing.",
    details: {
      size: "500,000 sq ft",
      systems: "Automated production",
      environment: "Clean room facilities",
      power: "Solar powered"
    },
    year: "2024",
    location: "Industrial Park",
    budget: "$75M",
    duration: "30 months"
  },
  {
    id: 4,
    title: "Mixed-Use Urban Development",
    category: "Commercial",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "A transformative urban project combining retail, office, and residential spaces with public plazas, green corridors, and community facilities.",
    details: {
      design: "Mixed-use complex",
      spaces: "Public plazas",
      features: "Green corridors",
      community: "Community hub"
    },
    year: "2023",
    location: "City Center",
    budget: "$120M",
    duration: "36 months"
  },
  {
    id: 5,
    title: "Historic Hotel Renovation",
    category: "Residential",
    image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Careful restoration of a 1920s landmark hotel, preserving historical architecture while integrating modern amenities and sustainable systems.",
    details: {
      rooms: "150 guest rooms",
      heritage: "Historic preservation",
      amenities: "Modern facilities",
      sustainability: "Green upgrades"
    },
    year: "2023",
    location: "Heritage District",
    budget: "$35M",
    duration: "20 months"
  },
  {
    id: 6,
    title: "Tech Campus Expansion",
    category: "Commercial",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Modern technology campus featuring collaborative workspaces, innovation labs, cafeteria facilities, and employee wellness centers.",
    details: {
      buildings: "4 connected buildings",
      labs: "Innovation facilities",
      wellness: "Employee centers",
      collaboration: "Open workspaces"
    },
    year: "2022",
    location: "Tech Valley",
    budget: "$65M",
    duration: "28 months"
  },
  {
    id: 7,
    title: "Sustainable Warehouse Complex",
    category: "Industrial",
    image: "https://images.pexels.com/photos/1619851/pexels-photo-1619851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Eco-friendly logistics hub with solar panels, rainwater harvesting, and advanced automation systems for efficient distribution operations.",
    details: {
      size: "800,000 sq ft",
      solar: "Solar panel array",
      automation: "Robotic systems",
      sustainability: "Green features"
    },
    year: "2022",
    location: "Logistics Hub",
    budget: "$55M",
    duration: "22 months"
  },
  {
    id: 8,
    title: "Premium Condominium Tower",
    category: "Residential",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description: "Luxury high-rise condominium with panoramic city views, premium finishes, state-of-the-art amenities, and concierge services.",
    details: {
      floors: "40 floors",
      units: "120 condominiums",
      views: "360° city views",
      amenities: "Premium facilities"
    },
    year: "2021",
    location: "Skyline District",
    budget: "$95M",
    duration: "32 months"
  }
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [visibleProjects, setVisibleProjects] = useState(new Set())

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id"));
            setVisibleProjects((prev) => new Set([...prev, projectId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll("[data-project-id]");
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-bgdark via-gray-800 to-bgdark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of exceptional construction projects that showcase our commitment to quality, 
            innovation, and architectural excellence across all sectors.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            {/* Category Filters */}
            <div className="flex items-center gap-4 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 ${
                    selectedCategory === category 
                      ? "bg-primary text-white" 
                      : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-8">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filters or search terms.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-project-id={project.id}
                  className={`transform transition-all duration-1000 ${
                    visibleProjects.has(project.id) 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <Badge className="absolute top-4 left-4 bg-primary text-white">
                        {project.category}
                      </Badge>
                      
                      {/* Year Badge */}
                      <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90 text-gray-900">
                        {project.year}
                      </Badge>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Button className="bg-white text-gray-900 hover:bg-gray-100">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Project Header */}
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                          <span className="mx-2">•</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{project.budget}</div>
                          <div className="text-xs text-gray-500">Budget</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{project.duration}</div>
                          <div className="text-xs text-gray-500">Duration</div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {Object.entries(project.details).slice(0, 2).map(([key, value], detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full group-hover:shadow-lg transition-all">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-bgdark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Project <span className="text-primary">Statistics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself with numbers that demonstrate our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", sublabel: "Across all sectors" },
              { number: "25+", label: "Years Experience", sublabel: "Industry leadership" },
              { number: "$2.5B+", label: "Total Project Value", sublabel: "Delivered successfully" },
              { number: "100%", label: "Client Satisfaction", sublabel: "On-time delivery" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to Create Your <span className="text-primary">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let's discuss how we can bring your vision to life with our proven expertise and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg rounded-full">
              Download Portfolio PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}