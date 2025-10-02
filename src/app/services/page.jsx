"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react"

const ResidentialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
  </svg>
);

const CommercialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
  </svg>
);

const IndustrialIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 22H2v-2l1-5H1v-2h2.08c.7-3.41 3.7-6 7.42-6 .9 0 1.75.14 2.5.38V4h3v2h2V4h3v2h-1.5c-.83 0-1.5.67-1.5 1.5V10c2.8.55 4.88 2.78 5 5.68V20h-2v2zM11.5 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
  </svg>
);

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential developments tailored to your lifestyle and budget.",
    icon: ResidentialIcon,
    features: [
      "Custom Home Design & Build",
      "Kitchen & Bathroom Remodeling",
      "Home Additions & Extensions",
      "Sustainable & Green Building",
      "Historic Home Restoration",
      "Smart Home Integration"
    ],
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    startingPrice: "Starting from $150/sq ft"
  },
  {
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial complexes that drive business success.",
    icon: CommercialIcon,
    features: [
      "Office Buildings & Corporate HQ",
      "Retail Centers & Shopping Malls",
      "Restaurants & Hospitality",
      "Mixed-Use Developments",
      "Healthcare Facilities",
      "Educational Buildings"
    ],
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    startingPrice: "Custom pricing available"
  },
  {
    title: "Industrial Solutions",
    description: "Warehouses, manufacturing facilities, and industrial infrastructure built for efficiency.",
    icon: IndustrialIcon,
    features: [
      "Manufacturing Plants",
      "Warehouses & Distribution Centers",
      "Industrial Complexes",
      "Processing Facilities",
      "Cold Storage Solutions",
      "Specialized Industrial Buildings"
    ],
    image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    startingPrice: "Contact for consultation"
  }
];

const additionalServices = [
  {
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery and budget adherence.",
    features: ["Timeline Management", "Budget Control", "Quality Assurance", "Risk Management"]
  },
  {
    title: "Design & Architecture",
    description: "Complete architectural services from concept to construction documentation.",
    features: ["Conceptual Design", "3D Modeling", "Construction Documents", "Permit Assistance"]
  },
  {
    title: "Consultation Services",
    description: "Expert advice on construction feasibility, cost estimation, and project planning.",
    features: ["Feasibility Studies", "Cost Estimation", "Value Engineering", "Code Compliance"]
  },
  {
    title: "Maintenance & Repair",
    description: "Ongoing maintenance services to keep your property in optimal condition.",
    features: ["Preventive Maintenance", "Emergency Repairs", "Facility Upgrades", "Warranty Service"]
  }
];

export default function ServicesPage() {
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
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Construction <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From residential dreams to industrial complexes, we deliver comprehensive construction solutions 
            with innovation, quality, and unmatched expertise across all sectors.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized construction services tailored to meet the unique requirements of each project sector.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Service Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-8 h-8 text-primary" />
                        <span className="text-white font-semibold text-lg">{service.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <service.icon className="w-12 h-12 text-primary" />
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-primary font-semibold">{service.startingPrice}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full">
                      View Projects
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your project's success from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl py-4  transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <div className="w-6 h-6 bg-primary rounded-sm group-hover:bg-white"></div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-bgdark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your <span className="text-primary">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Get in touch with our experts to discuss your construction needs and receive a personalized quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full">
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +1 (555) 123-4567
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg rounded-full bg-transparent">
              <Mail className="mr-2 w-5 h-5" />
              Email Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}