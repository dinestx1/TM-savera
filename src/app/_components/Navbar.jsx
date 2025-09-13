"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import logo from "@/assets/logo.png"
import Image from "next/image"


const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Career" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  return (
    <div className=" ">
      {/* Background Curved Elements */}
  <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-construction-dark/95  shadow-construction' 
          : 'bg-transparent'
      }`}
    >
   <nav className="w-full flex items-start justify-between max-w-full mx-auto hidden md:flex">
        {/* Left Section - Logo */}
        <div className="bg-white rounded-br-3xl px-4 py-3 relative  border border-border">
          <div className="flex flex-col">
          <Link href="/">
        <Image
    src={logo}
    alt="TM SAVERA"
    width={120}
    height={80}
    className=""
    priority
  /></Link>
          </div>

 
        </div>

        {/* Center Section - Navigation */}
        <div className="hidden md:flex bg-white rounded-full px-8 py-3 mt-2 relative border border-border">
          <div className="flex items-center space-x-1">
        {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="px-4 py-2 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium rounded-full hover:bg-accent"
    >
      {link.label}
    </Link>
  ))}
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary rounded-bl-full"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary rounded-br-full"></div>
        </div>

        {/* Right Section - CTA */}
        <div className="bg-white rounded-bl-3xl px-6 py-4 relative shadow-xs border border-border">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm  shadow-md">
            Start Project
          </Button>

    
        </div>
      </nav>


         <nav className="w-full flex items-center justify-between p-2 md:hidden">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="bg-white text-gray-800 p-2 pl-4 pr-6 rounded-2xl shadow-lg flex flex-col items-start relative"
          >
        
                <Image
    src={logo}
    alt="TM SAVERA"
    width={100}
    height={80}
    className=""
    priority
  />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white p-3 rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mx-4 mt-2 rounded-2xl overflow-hidden">
            <div className="flex flex-col">
     
           {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="px-4 py-4 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium  hover:bg-accent border-b border-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
    >
      {link.label}
    </Link>
  ))}
              <div className="p-4">
                <Link
                  href="/contact"
                  className="block bg-primary text-white px-6 py-3 rounded-full text-center transition-transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project
                </Link>
              </div>
            </div>
          </div>
        )}

</motion.nav>

    </div>
  )
}
