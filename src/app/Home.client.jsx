"use client"

import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import HeroSection from "./_components/Home/HeroSection"
import Image from "next/image"
import building1 from "@/assets/building1.png"
import building2 from "@/assets/building2.png"
import complex from "@/assets/complex.png"
import headquarters from "@/assets/headquarters.png"
import vehicle from "@/assets/vehicle.png"
import office from "@/assets/office.jpeg"
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);


const ResidentialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
  </svg>
);

// SVG Icon for Commercial Projects
const CommercialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
  </svg>
);

// SVG Icon for Industrial Solutions
const IndustrialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 22H2v-2l1-5H1v-2h2.08c.7-3.41 3.7-6 7.42-6 .9 0 1.75.14 2.5.38V4h3v2h2V4h3v2h-1.5c-.83 0-1.5.67-1.5 1.5V10c2.8.55 4.88 2.78 5 5.68V20h-2v2zM11.5 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
  </svg>
);

  const services = [
    {
      title: "Residential Construction",
      desc: "Custom homes, renovations, and residential developments tailored to your lifestyle and budget.",
      features: [
        "Custom Home Design",
        "Kitchen & Bath Remodeling",
        "Home Additions",
        "Sustainable Building",
      ],
      icon: ResidentialIcon,
    },
    {
      title: "Commercial Projects",
      desc: "Office buildings, retail spaces, and commercial complexes that drive business success.",
      features: ["Office Buildings", "Retail Centers", "Restaurants & Hotels", "Mixed-Use Developments"],
      icon: CommercialIcon,
    },
    {
      title: "Industrial Solutions",
      desc: "Warehouses, manufacturing facilities, and industrial infrastructure built for efficiency.",
      features: ["Manufacturing Plants", "Warehouses", "Distribution Centers", "Industrial Complexes"],
      icon: IndustrialIcon,
    },
  ];

  const projects =[
                {
                  title: "Modern Corporate Headquarters",
                  category: "Commercial",
                  image:headquarters,
                  description:
                    "A 15-story glass and steel masterpiece featuring sustainable design elements, smart building technology, and flexible workspace solutions for 2,000+ employees.",
                  details: ["15 floors", "200,000 sq ft", "LEED Platinum", "Smart Building Tech"],
                  year: "2024",
                  location: "Downtown District",
                },
                {
                  title: "Luxury Residential Complex",
                  category: "Residential",
                  image:complex,
                  description:
                    "An exclusive 50-unit residential development combining contemporary architecture with premium amenities, rooftop gardens, and panoramic city views.",
                  details: ["50 luxury units", "Rooftop amenities", "Underground parking", "24/7 concierge"],
                  year: "2023",
                  location: "Riverside Heights",
                },
                // {
                //   title: "Advanced Manufacturing Facility",
                //   category: "Industrial",
                //   description:
                //     "State-of-the-art production facility with automated systems, clean room environments, and sustainable energy solutions for next-generation manufacturing.",
                //   details: ["500,000 sq ft", "Automated systems", "Clean rooms", "Solar powered"],
                //   year: "2024",
                //   location: "Industrial Park",
                // },
                // {
                //   title: "Mixed-Use Urban Development",
                //   category: "Commercial",
                //   description:
                //     "A transformative urban project combining retail, office, and residential spaces with public plazas, green corridors, and community facilities.",
                //   details: ["Mixed-use design", "Public spaces", "Green corridors", "Community hub"],
                //   year: "2023",
                //   location: "City Center",
                // },
              ]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)
  const [visibleProjects, setVisibleProjects] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = Number.parseInt(entry.target.getAttribute("data-project-index"))
            setVisibleProjects((prev) => new Set([...prev, projectIndex]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const projectElements = document.querySelectorAll("[data-project-index]")
    projectElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="">
   
<section>
 <HeroSection/>
   </section>
    
      <div className="relative z-10 bg-background">
        {/* Services Preview */}
        <section id="services" className="py-32 px-6 relative overflow-hidden">
          {/* Background 3D Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
            <div
              className="absolute bottom-20 right-10 w-24 h-24 bg-primary/50 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-light text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From residential dreams to industrial complexes, we deliver excellence across all construction sectors
                with innovative solutions and unmatched quality.
              </p>
            </div>
           
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* 3D Card Effect */}
                  <div
                    className="relative bg-card rounded-3xl p-8 border border-border hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-100 animate-build-up overflow-hidden  flex flex-col h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-full transform -translate-x-12 translate-y-12"></div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-20 h-20 ${service.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl border border-border group-hover:scale-110 transition-transform duration-300`}
                    >
                       <service.icon className="w-10 h-10 " />
                    </div>

                    {/* Content */}
                     <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-center">{service.desc}</p>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform  mt-auto">
                        Learn More
                      </Button>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "25+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "50+", label: "Expert Team Members" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border animate-build-up"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  <div className="text-3xl md:text-4xl font-extrabold font-uni text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

         <section>
              <div className=" antialiased">
      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

  

        {/* Top Left: Image Block */}
        <div className="bg-bgdark flex items-center justify-center p-8 lg:p-16 order-1">
          <div className="w-full max-w-lg">
             <Image
                src={building1}
                alt="Modern architectural building with striking yellow and white features"
                className="rounded-xl  w-full h-full object-cover transform lg:scale-125 lg:translate-x-12 z-10"
               
              />
          </div>
        </div>

        {/* Top Right: Text Block */}
        <div className="flex items-center justify-center p-8 lg:p-16 order-2">
          <div className="max-w-md w-full">
            {/* The heading uses a serif font for a classic, professional feel. */}
            <h1 className="text-5xl lg:text-6xl  font-bold text-gray-800 tracking-wide">
              Transforming the
            </h1>
            <p className="mt-6 text-gray-600 leading-relaxed">
              At the forefront of the construction industry, we are dedicated to creating awe-inspiring structures that redefine the boundaries of architectural excellence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-primary text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center">
                Discover Our Portfolio
                <ArrowRightIcon />
              </button>
              <button className="bg-transparent text-gray-800 px-7 py-3 rounded-full font-semibold text-sm border border-gray-300 hover:bg-gray-100 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

     

        {/* Bottom Left: Text Block */}
        <div className="bg-bgdark flex items-center justify-center p-8 lg:p-16 order-4 lg:order-3">
           <div className="max-w-md w-full text-white">
            <h2 className="text-5xl lg:text-6xl  font-bold tracking-wide">
              Redefining the Built
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              As a leading construction company, we are committed to pushing the boundaries of what's possible. Our team of seasoned professionals combines a deep understanding of structural integrity with creative vision.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-primary text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300 flex items-center">
                Explore Our Work
                <ArrowRightIcon />
              </button>
              <button className="bg-transparent text-white px-7 py-3 rounded-full font-semibold text-sm border border-gray-700 hover:bg-gray-900 transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Right: Image Block */}
        <div className="bg-bgdark flex items-center justify-center p-8 lg:p-16 order-3 lg:order-4">
           <div className="w-full max-w-lg">
             <Image
                src={building2}
                alt="3D architectural model of a modern multi-story building"
                className="rounded-xl  w-full h-full object-cover transform lg:scale-125 lg:-translate-x-12"
           
              />
           </div>
        </div>
      </main>
    </div>
         </section>  

      
        {/* Projects Gallery Section with Scroll Animations */}
        <section id="work" className="py-32 px-6 relative overflow-hidden bg-muted/20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full animate-float"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/60 rounded-full animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-3/4 left-3/4 w-32 h-32 bg-primary/40 rounded-full animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-light text-foreground mb-6">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our portfolio of exceptional construction projects that showcase our commitment to quality,
                innovation, and architectural excellence.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  data-project-index={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`transform transition-all duration-1000 ${
                        visibleProjects.has(index)
                          ? "translate-x-0 opacity-100"
                          : index % 2 === 0
                            ? "-translate-x-20 opacity-0"
                            : "translate-x-20 opacity-0"
                      }`}
                    >
                      <div className="relative  rounded-3xl overflow-hidden  group-hover:shadow-3xl transition-all duration-500">
                        {/* Project Image Placeholder */}
                        <div className="from-primary/20 to-muted relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />

                          {/* Overlay with project category */}
                          <div className="absolute top-6 left-6">
                            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                              {project.category}
                            </span>
                          </div>

                          {/* Year badge */}
                          <div className="absolute top-6 right-6">
                            <span className="bg-card/90 backdrop-blur-sm text-foreground font-uni px-4 py-2 rounded-full text-sm font-extrabold">
                              {project.year}
                            </span>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <Button className="bg-card text-foreground hover:bg-card/90 rounded-full px-8 py-3 font-semibold shadow-lg">
                              View Details
                            </Button>
                          </div>
                        </div>

                        {/* 3D Border Effect */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div
                      className={`transform transition-all duration-1000 delay-300 ${
                        visibleProjects.has(index) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                    >
                      {/* Project Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-1 bg-primary rounded-full"></div>
                          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            {project.location}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {project.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                          View Project
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
                        >
                          Case Study
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-card rounded-3xl p-12  border border-border relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                    Ready to Start Your <span className="text-primary">Next Project?</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can bring your vision to life with our expertise in construction and design
                    excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Your Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
                    >
                      View All Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>

   
     
    </div>
  )
}
