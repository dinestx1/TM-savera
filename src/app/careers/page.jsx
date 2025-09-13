"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Building, Award, ArrowRight, Upload, CheckCircle } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "Downtown Office",
    salary: "$90,000 - $120,000",
    experience: "8+ years",
    posted: "3 days ago",
    description: "Lead complex construction projects from inception to completion, managing teams, budgets, and timelines while ensuring quality delivery.",
    requirements: [
      "Bachelor's degree in Construction Management, Civil Engineering, or related field",
      "8+ years of project management experience in commercial construction",
      "PMP certification preferred",
      "Strong leadership and communication skills",
      "Proficiency in project management software"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Professional development opportunities"
    ]
  },
  {
    id: 2,
    title: "Construction Superintendent",
    department: "Field Operations",
    type: "Full-time",
    location: "Various Sites",
    salary: "$75,000 - $95,000",
    experience: "6+ years",
    posted: "1 week ago",
    description: "Oversee daily construction operations, coordinate with subcontractors, and ensure adherence to safety protocols and quality standards.",
    requirements: [
      "High school diploma or equivalent, trade school preferred",
      "6+ years of construction field experience",
      "OSHA 30 certification required",
      "Strong problem-solving and organizational skills",
      "Ability to read blueprints and technical drawings"
    ],
    benefits: [
      "Competitive salary package",
      "Company vehicle provided",
      "Health and safety training",
      "Career advancement opportunities"
    ]
  },
  {
    id: 3,
    title: "Architectural Designer",
    department: "Design",
    type: "Full-time",
    location: "Design Studio",
    salary: "$65,000 - $85,000",
    experience: "4+ years",
    posted: "5 days ago",
    description: "Create innovative architectural designs for residential and commercial projects, collaborating with clients and engineering teams.",
    requirements: [
      "Bachelor's degree in Architecture",
      "4+ years of architectural design experience",
      "Proficiency in AutoCAD, Revit, and SketchUp",
      "Strong creative and technical skills",
      "Portfolio demonstrating design capabilities"
    ],
    benefits: [
      "Creative work environment",
      "Professional development budget",
      "Flexible work arrangements",
      "Health and wellness programs"
    ]
  },
  {
    id: 4,
    title: "Safety Coordinator",
    department: "Safety & Compliance",
    type: "Full-time",
    location: "Multiple Sites",
    salary: "$55,000 - $70,000",
    experience: "3+ years",
    posted: "2 weeks ago",
    description: "Develop and implement safety programs, conduct site inspections, and ensure compliance with all safety regulations and standards.",
    requirements: [
      "Bachelor's degree in Safety Management or related field",
      "3+ years of construction safety experience",
      "OSHA certification required",
      "Strong attention to detail and communication skills",
      "Knowledge of safety regulations and best practices"
    ],
    benefits: [
      "Comprehensive training programs",
      "Safety equipment provided",
      "Professional certification support",
      "Recognition and reward programs"
    ]
  },
  {
    id: 5,
    title: "Estimator",
    department: "Preconstruction",
    type: "Full-time",
    location: "Office",
    salary: "$70,000 - $90,000",
    experience: "5+ years",
    posted: "4 days ago",
    description: "Prepare accurate cost estimates for construction projects, analyze blueprints, and collaborate with project teams to ensure competitive bidding.",
    requirements: [
      "Bachelor's degree in Construction Management or Engineering",
      "5+ years of estimating experience",
      "Proficiency in estimating software",
      "Strong analytical and mathematical skills",
      "Excellent attention to detail"
    ],
    benefits: [
      "Performance-based bonuses",
      "Professional development opportunities",
      "Modern office environment",
      "Comprehensive benefits package"
    ]
  },
  {
    id: 6,
    title: "Junior Civil Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Engineering Office",
    salary: "$60,000 - $75,000",
    experience: "1-3 years",
    posted: "1 week ago",
    description: "Support senior engineers in design and analysis of construction projects, perform calculations, and assist with project documentation.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "1-3 years of engineering experience",
      "EIT certification preferred",
      "Proficiency in engineering software (AutoCAD, Civil 3D)",
      "Strong analytical and problem-solving skills"
    ],
    benefits: [
      "Mentorship program",
      "PE license support",
      "Continuing education opportunities",
      "Growth-oriented environment"
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-leading salaries with performance-based bonuses and annual reviews."
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Training programs, certifications, and career advancement opportunities."
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative culture with supportive colleagues and mentorship programs."
  },
  {
    icon: Building,
    title: "Modern Workplace",
    description: "State-of-the-art facilities with latest technology and safety equipment."
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null
  });

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setApplicationData({ ...applicationData, position: job.title });
  };

  const handleInputChange = (field, value) => {
    setApplicationData({ ...applicationData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Application submitted:", applicationData);
    alert("Application submitted successfully! We'll be in touch soon.");
  };

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
              Join Our Team
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Build Your <span className="text-primary">Career</span> With Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a dynamic team of construction professionals dedicated to excellence, innovation, and building 
            the future together. Discover opportunities to grow your career in an industry-leading company.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary">TM SAVERA?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than just a construction company – we're a community of professionals committed to 
              excellence, innovation, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Stats */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Team Members" },
                { number: "25+", label: "Years Experience" },
                { number: "95%", label: "Employee Retention" },
                { number: "100%", label: "Growth Opportunities" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and find the perfect role to advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 border-0 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">{job.department}</Badge>
                    <span className="text-sm text-gray-500">{job.posted}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {job.type} • {job.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2 text-primary" />
                      {job.salary}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full group-hover:shadow-lg transition-all"
                    onClick={() => handleJobSelect(job)}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Apply for {selectedJob.title}</h3>
                  <p className="text-gray-600">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <Button variant="outline" onClick={() => setSelectedJob(null)} className="rounded-full">
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Job Details */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Job Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {selectedJob.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2 text-primary" />
                        {selectedJob.salary}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {selectedJob.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {selectedJob.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={applicationData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={applicationData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={applicationData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Select onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        value={applicationData.coverLetter}
                        onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                        placeholder="Tell us why you're interested in this position..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume/CV *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Drag and drop your resume here, or click to browse</p>
                        <p className="text-sm text-gray-500">PDF, DOC, or DOCX files up to 10MB</p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="resume-upload"
                          onChange={(e) => handleInputChange("resume", e.target.files[0])}
                        />
                        <label htmlFor="resume-upload" className="inline-block mt-4">
                          <Button type="button" variant="outline" className="rounded-full">
                            Choose File
                          </Button>
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex-1">
                        Submit Application
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setSelectedJob(null)} className="px-8 py-3 rounded-full">
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Culture */}
      <section className="py-32 px-6 bg-bgdark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our <span className="text-primary">Culture</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            At TM SAVERA, we foster a culture of innovation, collaboration, and continuous learning 
            where every team member can thrive and contribute to our shared success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaborative Environment</h3>
              <p className="text-gray-300">Work alongside passionate professionals in a supportive, team-oriented atmosphere.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Growth Opportunities</h3>
              <p className="text-gray-300">Advance your career with continuous learning, mentorship, and leadership development.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Meaningful Work</h3>
              <p className="text-gray-300">Contribute to projects that shape communities and create lasting positive impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Don't See the Right <span className="text-primary">Position?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We're always looking for talented individuals to join our team. Send us your resume and 
            we'll keep you in mind for future opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg rounded-full">
              Submit General Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg rounded-full">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}