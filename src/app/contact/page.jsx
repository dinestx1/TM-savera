"use client"

import { useEffect, useState,useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building, User } from "lucide-react"
import { getContact } from "@/store/slices/dataSlice"
import Link from "next/link"
import { ContactPageSkeleton } from "../_components/loaders/contactPageLoading"



const services = [
  "Residential Construction",
  "Commercial Projects",
  "Industrial Solutions",
  "Renovations & Remodeling",
  "Project Consultation",
  "Emergency Repairs"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {contact,loading}=useSelector((state)=>state.data)
  const dispatch=useDispatch()

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  useEffect(()=>{
     dispatch(getContact())
 
  },[dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 2000);
  };


  const contactInfo = useMemo(() => {
    // If contact data hasn't loaded yet, return an empty array to avoid errors
    if (!contact) {
      return [];
    }

    // Build the array using data from the 'contact' object
    return [
      {
        icon: Phone,
        title: "Phone",
        primary: contact.phone || "Not available",
        secondary: "", // Your data has only one phone number
        description: "Call us during business hours"
      },
      {
        icon: Mail,
        title: "Email",
        primary: contact.email || "Not available",
        secondary: "", // Your data has only one email
        description: "We respond within 24 hours"
      },
      {
        icon: MapPin,
        title: "Office Location",
        primary: contact.address || "Not available",
        secondary: "", // Your address is a single string
        description: "Visit us for consultations"
      },
      {
        icon: Clock,
        title: "Business Hours",
        // Combine start and end times into a single string
        primary: `Mon - Fri: ${contact.openOfficeTime?.start} - ${contact.openOfficeTime?.end}`,
        secondary: "", // Your data doesn't specify weekend hours
        description: "Emergency services available 24/7"
      }
    ];
  }, [contact]);


  if (loading || !contact) {
    return (
      <div className="min-h-screen bg-white">
        {/* You can keep your static Hero section if you want it to show instantly */}
        <section className="relative py-32 px-6 bg-gradient-to-br from-bgdark via-gray-800 to-bgdark overflow-hidden">
             <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Let's Build <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next construction project? Get in touch with our expert team for a 
            consultation and free quote. We're here to bring your vision to life.
          </p>
        </div>
        </section>
        

        <ContactPageSkeleton /> 
      </div>
    );
  }

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
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Let's Build <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next construction project? Get in touch with our expert team for a 
            consultation and free quote. We're here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary">Information</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us – choose what works best for you. Our team is ready to assist with all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-8 h-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <p className="text-primary font-semibold mb-1">{info.primary}</p>
                  <p className="text-gray-600 mb-3">{info.secondary}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary py-6 text-white border-0">
              <CardHeader className="text-center pb-4">
                <Phone className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <CardTitle className="text-xl">Call Now</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 opacity-90">Speak directly with our project managers</p>
                <Button className="bg-white text-primary hover:bg-gray-100 w-full rounded-full">
                  {contact?.phone}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 py-6 hover:bg-primary hover:text-white group transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <MessageSquare className="w-12 h-12 text-primary group-hover:text-white mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900 group-hover:text-white">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-gray-600 group-hover:text-white">Chat with our support team instantly</p>
                <Button className="bg-primary text-white hover:bg-white hover:text-primary group-hover:bg-white group-hover:text-primary w-full rounded-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-0 py-6 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-gray-600">Send detailed project information</p>
                <Button className="bg-primary text-white hover:bg-primary/90 w-full rounded-full">
                  info@tmsavera.com
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response 
                  and next steps for your project.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-primary" />
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Enter company name (optional)"
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="rounded-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="rounded-full">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
                        <SelectItem value="1m+">$1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="rounded-full">
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                      <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                      <SelectItem value="6months+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project, specific requirements, timeline, and any other important details..."
                    rows={5}
                    required
                    className="rounded-2xl"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Visit Our <span className="text-primary">Office</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Schedule an in-person consultation at our office to discuss your project in detail 
                  and view our portfolio of completed projects.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Office building exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">TM SAVERA Office</h4>
                    <p>{contact?.address}</p>
                      <Link href={contact?.location}>
                    <Button  className="mt-4 bg-white text-primary hover:bg-gray-100 rounded-full">
                      Get Directions
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>

        
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Get quick answers to common questions about our services, process, and timeline.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical construction project take?",
                answer: "Project timelines vary based on scope and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-24 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes, we offer free initial consultations and estimates for all projects. This includes site visits, preliminary assessments, and budget discussions to help you understand the scope and cost of your project."
              },
              {
                question: "What types of projects do you specialize in?",
                answer: "We specialize in residential, commercial, and industrial construction projects including custom homes, office buildings, retail spaces, warehouses, renovations, and additions. Our team has expertise across all construction sectors."
              },
              {
                question: "Are you licensed and insured?",
                answer: "Yes, TM SAVERA is fully licensed, bonded, and insured. We maintain comprehensive liability insurance and workers' compensation coverage. All our work is performed by certified professionals and meets local building codes."
              },
              {
                question: "Can you work with my architect or designer?",
                answer: "Absolutely! We collaborate with architects, designers, and other professionals to bring your vision to life. We can also provide design-build services if you need comprehensive support from concept to completion."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 px-6 bg-bgdark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Need Emergency <span className="text-primary">Assistance?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We provide 24/7 emergency services for urgent construction issues, structural problems, 
            and disaster recovery situations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <Phone className="mr-2 w-5 h-5" />
              Emergency: +1 (555) 911-HELP
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg rounded-full bg-transparent">
              <Mail className="mr-2 w-5 h-5" />
              Regular Inquiries
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}