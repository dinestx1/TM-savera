"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import logo from "@/assets/logo.png"
import Image from "next/image"





export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
 <nav className="sticky top-0 z-50 flex items-center justify-between    rounded-2xl ">
        {/* Left Section - Logo */}
        <div className="bg-white rounded-br-3xl px-4 py-3 relative  border border-border">
          <div className="flex flex-col">
        <Image
    src={logo}
    alt="TM SAVERA"
    width={120}
    height={80}
    className=""
    priority
  />
          </div>

 
        </div>

        {/* Center Section - Navigation */}
        <div className="hidden md:flex bg-white rounded-full px-8 py-3 relative border border-border">
          <div className="flex items-center space-x-1">
            <a
              href="#work"
              className="px-4 py-2 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium rounded-full hover:bg-accent"
            >
             Portfolio
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium rounded-full hover:bg-accent"
            >
              Services
            </a>
               <a
              href="#Career"
              className="px-4 py-2 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium rounded-full hover:bg-accent"
            >
              Career
            </a>
            <a
              href="#services"
              className="px-4 py-2 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium rounded-full hover:bg-accent"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-foreground hover:text-accent-foreground transition-colors text-sm font-medium rounded-full hover:bg-accent"
            >
              Contact
            </a>
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary rounded-bl-full"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary rounded-br-full"></div>
        </div>

        {/* Right Section - CTA */}
        <div className="bg-white rounded-bl-3xl px-6 py-4 relative shadow-xs border border-border">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-md">
            Start Project
          </Button>

    
        </div>
      </nav>

</motion.nav>

    </div>
  )
}
