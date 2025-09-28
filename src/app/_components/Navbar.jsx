"use client"

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"
import logo from "@/assets/logo.png"
import Image from "next/image"
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Career" },
  { href: "/about", label: "About" },
   { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);


export default function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
 const pathname = usePathname(); // 2. Get the current path
  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);


  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
<>
      {/* Background Curved Elements */}
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
      className={`fixed top-0 left-0 mt-2 right-0 max-w-7xl mx-auto z-50 transition-colors rounded-full duration-300 bg-white border-1 backdrop-blur-lg `}
    >
      <div className=" px-6">
        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center justify-between py-2">
            {/* Left Section - Logo */}
            <Link href="/">
              <Image src={logo} alt="TM SAVERA" width={100} height={20} className="object-contain" priority />
            </Link>

            {/* Center Section - Navigation with Gliding Pill */}
            <div
              className="flex items-center gap-x-1 border border-gray-200/80 rounded-full px-2 py-1"
              onMouseLeave={() => setHoveredLink(null)}
            >
             {navLinks.map((link, i) => {
        const isActive = pathname === link.href; // 3. Check if the link is active

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 text-sm font-medium transition-colors relative z-10 ${
              // Set text to white if link is active OR hovered
              isActive || hoveredLink === i ? "text-white" : "text-gray-900"
            }`}
            onMouseEnter={() => setHoveredLink(i)}
          >
            {/* 4. UPDATED LOGIC: Show pill if active (and not hovering elsewhere) OR if hovered */}
            {(isActive && hoveredLink === null) || hoveredLink === i ? (
              <motion.span
                layoutId="desktop-active-link-pill"
                className="absolute inset-0 bg-primary rounded-full z-0"
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />
            ) : null}
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
            </div>

            {/* Right Section - Animated CTA Button */}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full font-semibold">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/start-project">Start Project</Link>
              </motion.div>
            </Button>
        </div>

        {/* --- Mobile Navigation --- */}
        <div className="md:hidden flex items-center justify-between h-16">
          <Link href="/">
            <Image src={logo} alt="TM SAVERA" width={90} height={35} priority />
          </Link>
          <button onClick={toggleMobileMenu} className="p-2 z-50 text-primary">
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      // Defines the container for the dropdown
      className="md:hidden absolute top-full left-0 w-full px-4 pt-2  "
      // Animation variants for a smooth dropdown effect
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="bg-white  rounded-2xl overflow-hidden border border-gray-200/50">
        <div className="flex flex-col">
          {/* Map through the navigation links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-4 text-gray-700 hover:text-black transition-colors text-sm font-medium hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button at the bottom */}
          <div className="p-4 bg-gray-50/50">
            <Link
              href="/start-project" // Changed from /contact to match desktop
              className="block bg-primary text-primary-foreground px-6 py-3 rounded-full text-center transition-transform hover:scale-105 text-sm font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>



    </motion.header>
          <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
</>

  )
}
