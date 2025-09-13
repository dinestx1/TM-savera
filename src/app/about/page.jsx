"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Building, Target, ArrowRight, CheckCircle, Star, Trophy, Section } from "lucide-react"
import office from "@/assets/office.jpeg"
const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    experience: "20+ years",
    specialty: "Strategic Leadership & Business Development",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
    description: "Leading TM SAVERA's vision with two decades of construction industry expertise."
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Construction",
    experience: "18+ years",
    specialty: "Project Management & Site Operations",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
    description: "Ensuring every project meets our highest standards of quality and safety."
  },
  {
    name: "Elena Chen",
    role: "Lead Architect",
    experience: "15+ years",
    specialty: "Sustainable Design & Innovation",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
    description: "Creating innovative architectural solutions that blend form with function."
  },
  {
    name: "David Thompson",
    role: "Engineering Director",
    experience: "22+ years",
    specialty: "Structural Engineering & Safety",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
    description: "Ensuring structural integrity and safety in every project we undertake."
  },
  {
    name: "Lisa Wang",
    role: "Design Director",
    experience: "14+ years",
    specialty: "Interior Design & Space Planning",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
    description: "Transforming spaces into functional and beautiful environments."
  },
  {
    name: "James Foster",
    role: "Safety Manager",
    experience: "16+ years",
    specialty: "Workplace Safety & Compliance",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
    description: "Maintaining the highest safety standards across all our construction sites."
  }
];

const achievements = [
  {
    award: "Construction Excellence Award",
    year: "2024",
    organization: "National Construction Association",
    description: "Outstanding achievement in sustainable construction practices and innovation.",
    icon: Trophy
  },
  {
    award: "Innovation in Building Award",
    year: "2023",
    organization: "Architecture & Design Council",
    description: "Revolutionary approach to smart building integration and energy efficiency.",
    icon: Star
  },
  {
    award: "Safety Leadership Recognition",
    year: "2023",
    organization: "Construction Safety Institute",
    description: "Exemplary safety record and worker protection standards across all projects.",
    icon: Award
  },
  {
    award: "Sustainable Building Champion",
    year: "2022",
    organization: "Green Building Council",
    description: "Leading the industry in sustainable construction practices and green building techniques.",
    icon: CheckCircle
  }
];

const companyValues = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, setting the highest standards in construction quality and craftsmanship."
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Honest communication, transparent processes, and ethical business practices guide every decision we make."
  },
  {
    icon: Building,
    title: "Innovation",
    description: "We embrace cutting-edge technology and sustainable practices to deliver forward-thinking solutions."
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Our clients trust us to deliver on time, within budget, and to the exact specifications promised."
  }
];

export default function AboutPage() {
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
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Building <span className="text-primary">Excellence</span> Since 1999
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            For over 25 years, TM SAVERA has been transforming visions into reality through innovative 
            construction solutions, exceptional craftsmanship, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto mt-16 p-4">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-1 bg-primary rounded-full"></div>
                      <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                      Building Excellence Since <span className="text-primary">1999</span>
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Founded with a vision to revolutionize the construction industry, Nabulé has grown from a small
                      local contractor to a leading construction company known for innovation, quality, and reliability.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Our commitment to sustainable building practices, cutting-edge technology, and client satisfaction
                      has earned us recognition as an industry leader and trusted partner for projects of all scales.
                    </p>
                  </div>
  
                  {/* Mission & Values */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                        <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">Our Mission</h4>
                      <p className="text-muted-foreground">
                        To deliver exceptional construction solutions that exceed expectations while building lasting
                        relationships.
                      </p>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                        <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">Our Values</h4>
                      <p className="text-muted-foreground">
                        Integrity, innovation, and excellence guide every project we undertake and every relationship we
                        build.
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Company Image */}
                <div className="relative">
                  <div className="bg-card rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={office}
                      alt="Nabulé Construction Company"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                    <div className="text-3xl font-uni font-bold">25+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                  <div className="absolute -top-8 -right-8 bg-card text-foreground rounded-2xl p-6 shadow-xl border border-border">
                    <div className="text-3xl font-bold font-uni text-primary">500+</div>
                    <div className="text-sm">Projects Delivered</div>
                  </div>
                </div>
              </div>
</section>
      {/* Team Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-primary">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of professionals brings together decades of experience, innovative thinking, 
              and unwavering dedication to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="text-sm opacity-90 mb-1">{member.experience} Experience</div>
                      <div className="text-xs opacity-75">{member.specialty}</div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <div className="text-center">
            <div className="bg-primary rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  We're always looking for talented individuals who share our passion for construction excellence.
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-32 px-6 bg-bgdark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and satisfied clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold">{achievement.award}</h3>
                        <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">{achievement.year}</span>
                      </div>
                      <p className="text-primary font-semibold mb-3">{achievement.organization}</p>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", sublabel: "Across all sectors" },
              { number: "25+", label: "Years Experience", sublabel: "Industry leadership" },
              { number: "100%", label: "Client Satisfaction", sublabel: "On-time delivery" },
              { number: "50+", label: "Expert Team Members", sublabel: "Dedicated professionals" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-gray-900 font-semibold">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ready to Work <span className="text-primary">With Us?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let's discuss how our expertise and dedication can bring your construction vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg rounded-full">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}