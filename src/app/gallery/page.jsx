"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { Filter, Search, X, ChevronLeft, ChevronRight, Download, Share2, Heart, Eye,Grid,List } from "lucide-react"
import Image from "next/image"

// Gallery data with comprehensive image collection
const galleryImages = [
  // Modern Corporate Headquarters
  {
    id: 1,
    src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Modern Corporate Headquarters - Exterior",
    category: "Commercial",
    project: "Modern Corporate Headquarters",
    location: "Downtown District",
    year: "2024",
    description: "Stunning glass facade with integrated solar panels and modern architectural elements.",
    tags: ["exterior", "glass", "modern", "sustainable"]
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Corporate Headquarters - Interior Lobby",
    category: "Commercial",
    project: "Modern Corporate Headquarters",
    location: "Downtown District",
    year: "2024",
    description: "Spacious lobby with contemporary design and natural lighting.",
    tags: ["interior", "lobby", "contemporary", "lighting"]
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Corporate Headquarters - Office Space",
    category: "Commercial",
    project: "Modern Corporate Headquarters",
    location: "Downtown District",
    year: "2024",
    description: "Open office layout with flexible workspace solutions.",
    tags: ["interior", "office", "workspace", "flexible"]
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Corporate Headquarters - Conference Room",
    category: "Commercial",
    project: "Modern Corporate Headquarters",
    location: "Downtown District",
    year: "2024",
    description: "State-of-the-art conference room with smart building technology.",
    tags: ["interior", "conference", "technology", "smart"]
  },
  // Luxury Residential Complex
  {
    id: 5,
    src: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Luxury Residential Complex - Exterior",
    category: "Residential",
    project: "Luxury Residential Complex",
    location: "Riverside Heights",
    year: "2023",
    description: "Elegant residential building with premium architectural design.",
    tags: ["exterior", "luxury", "residential", "elegant"]
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Residential Complex - Rooftop Garden",
    category: "Residential",
    project: "Luxury Residential Complex",
    location: "Riverside Heights",
    year: "2023",
    description: "Beautiful rooftop garden with panoramic city views.",
    tags: ["rooftop", "garden", "views", "amenities"]
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Residential Complex - Luxury Unit Interior",
    category: "Residential",
    project: "Luxury Residential Complex",
    location: "Riverside Heights",
    year: "2023",
    description: "Premium interior finishes with modern design elements.",
    tags: ["interior", "luxury", "modern", "finishes"]
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Residential Complex - Amenities",
    category: "Residential",
    project: "Luxury Residential Complex",
    location: "Riverside Heights",
    year: "2023",
    description: "World-class amenities including fitness center and pool.",
    tags: ["amenities", "fitness", "pool", "luxury"]
  },
  // Industrial Manufacturing Facility
  {
    id: 9,
    src: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Manufacturing Facility - Exterior",
    category: "Industrial",
    project: "Advanced Manufacturing Facility",
    location: "Industrial Park",
    year: "2024",
    description: "State-of-the-art manufacturing facility with sustainable design.",
    tags: ["exterior", "manufacturing", "industrial", "sustainable"]
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/1619851/pexels-photo-1619851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Manufacturing Facility - Production Floor",
    category: "Industrial",
    project: "Advanced Manufacturing Facility",
    location: "Industrial Park",
    year: "2024",
    description: "Advanced production floor with automated systems.",
    tags: ["interior", "production", "automated", "systems"]
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Manufacturing Facility - Clean Room",
    category: "Industrial",
    project: "Advanced Manufacturing Facility",
    location: "Industrial Park",
    year: "2024",
    description: "Specialized clean room environment for precision manufacturing.",
    tags: ["interior", "cleanroom", "precision", "specialized"]
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Manufacturing Facility - Solar Installation",
    category: "Industrial",
    project: "Advanced Manufacturing Facility",
    location: "Industrial Park",
    year: "2024",
    description: "Rooftop solar panel installation for sustainable energy.",
    tags: ["exterior", "solar", "sustainable", "energy"]
  },
  // Mixed-Use Development
  {
    id: 13,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Mixed-Use Development - Exterior",
    category: "Commercial",
    project: "Mixed-Use Urban Development",
    location: "City Center",
    year: "2023",
    description: "Innovative mixed-use development combining multiple functions.",
    tags: ["exterior", "mixed-use", "urban", "innovative"]
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Mixed-Use Development - Public Plaza",
    category: "Commercial",
    project: "Mixed-Use Urban Development",
    location: "City Center",
    year: "2023",
    description: "Beautiful public plaza with community gathering spaces.",
    tags: ["exterior", "plaza", "community", "public"]
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Mixed-Use Development - Retail Space",
    category: "Commercial",
    project: "Mixed-Use Urban Development",
    location: "City Center",
    year: "2023",
    description: "Modern retail spaces with high-end finishes.",
    tags: ["interior", "retail", "modern", "commercial"]
  },
  // Historic Hotel Renovation
  {
    id: 16,
    src: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Historic Hotel - Restored Facade",
    category: "Residential",
    project: "Historic Hotel Renovation",
    location: "Heritage District",
    year: "2023",
    description: "Carefully restored 1920s hotel facade preserving historical character.",
    tags: ["exterior", "historic", "restoration", "heritage"]
  },
  {
    id: 17,
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Historic Hotel - Grand Lobby",
    category: "Residential",
    project: "Historic Hotel Renovation",
    location: "Heritage District",
    year: "2023",
    description: "Restored grand lobby blending historic charm with modern amenities.",
    tags: ["interior", "lobby", "historic", "restoration"]
  },
  {
    id: 18,
    src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Historic Hotel - Guest Room",
    category: "Residential",
    project: "Historic Hotel Renovation",
    location: "Heritage District",
    year: "2023",
    description: "Elegantly appointed guest room with period-appropriate design.",
    tags: ["interior", "guestroom", "elegant", "period"]
  },
  // Construction Process Images
  {
    id: 19,
    src: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Construction Process - Foundation Work",
    category: "Process",
    project: "Various Projects",
    location: "Multiple Sites",
    year: "2024",
    description: "Professional foundation work showcasing our construction expertise.",
    tags: ["construction", "foundation", "process", "expertise"]
  },
  {
    id: 20,
    src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title: "Construction Process - Steel Framework",
    category: "Process",
    project: "Various Projects",
    location: "Multiple Sites",
    year: "2024",
    description: "Precision steel framework construction with safety protocols.",
    tags: ["construction", "steel", "framework", "safety"]
  }
];

const categories = ["All", "Commercial", "Residential", "Industrial", "Process"];
const years = ["All", "2024", "2023", "2022"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
 
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState("grid") // grid or masonry
  const [favorites, setFavorites] = useState(new Set())
   const [showFilters, setShowFilters] = useState(false)

  // Filter images based on category, year, and search
  useEffect(() => {
    let filtered = galleryImages;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }

    if (selectedYear !== "All") {
      filtered = filtered.filter(image => image.year === selectedYear);
    }

    
    setFilteredImages(filtered);
  }, [selectedCategory, selectedYear]);

  // Lightbox navigation
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };
  const clearFilters = () => {
 
    setSelectedCategory("All")
    setSelectedYear("All")

  }
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Toggle favorite
  const toggleFavorite = (imageId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

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
              Project Gallery
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of construction projects, showcasing our expertise across 
            residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
        <section className="py-12 px-6 bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
         
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

          
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredImages.length} of {galleryImages.length} projects
                </p>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No images found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}>
              {filteredImages.map((image, index) => (
                <Card 
                  key={image.id} 
                  className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer ${
                    viewMode === "masonry" ? "break-inside-avoid" : ""
                  }`}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src} 
                      alt={image.title}
                      width={100}
                      height={100}
                      className={`w-full  object-cover group-hover:scale-110 transition-transform duration-700 ${
                        viewMode === "grid" ? "h-64" : "h-auto"
                      }`}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <Badge className="absolute left-4 bg-primary text-white">
                      {image.category}
                    </Badge>
                    
                    {/* Favorite Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(image.id);
                      }}
                    >
                     <div className="flex items-center gap-2 justify-between text-xs text-gray-500">
                      <span>{image.location}</span>
                      <span>{image.year}</span>
                    </div>
                    </Button>
                    
                    {/* Hover Actions */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center justify-between">
                        <div className="text-white">
                          <p className="font-semibold text-sm">{image.title}</p>
                          <p className="text-xs opacity-90">{image.project}</p>
                        <p className="text-sm text-accent-foreground mb-2 line-clamp-2">{image.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full p-2">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full p-2">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

               
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-3"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Arrows */}
            <Button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-3"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full p-3"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image */}
            <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-8">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Image Info Panel */}
              <div className="lg:w-80 bg-white rounded-lg p-6 max-h-[80vh] overflow-y-auto">
                <div className="mb-4">
                  <Badge className="bg-primary text-white mb-3">{selectedImage.category}</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <p className="text-primary font-semibold mb-2">{selectedImage.project}</p>
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{selectedImage.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Year:</span>
                    <span className="font-medium">{selectedImage.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span className="font-medium">{selectedImage.category}</span>
                  </div>
                </div>
                
        
                
          
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6 bg-bgdark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Inspired by Our <span className="text-primary">Work?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss how we can bring your construction vision to life with our proven expertise and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg rounded-full bg-transparent">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}