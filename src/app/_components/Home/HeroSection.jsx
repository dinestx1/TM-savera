"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import hero from "@/assets/hero.jpg"
import hero1 from "@/assets/hero1.jpg"
import hero2 from "@/assets/hero-construction.jpg"
import Link from 'next/link';
// --- Carousel Slide Data ---
// Add your images and text here
const slides = [
  {
    image: hero, // Replace with your image path
    alt: "Modern skyscraper construction",
    title: "Building the",
    highlight: "Future",
    subtitle: "Premium construction services with cutting-edge technology and unmatched craftsmanship.",
  },
  {
    image: hero1, // Replace with your image path
    alt: "Interior of a newly constructed building",
    title: "Designing",
    highlight: "Excellence",
    subtitle: "From blueprint to reality, we bring architectural visions to life with precision and passion.",
  },
  {
    image: hero2, // Replace with your image path
    alt: "Construction worker on a high-rise",
    title: "Crafting",
    highlight: "Landmarks",
    subtitle: "Our commitment to quality ensures every project stands as a testament to durability and style.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Auto-scroll Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* --- Background Image Carousel --- */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* --- Black Gradient Overlay from Bottom --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      
      {/* --- Content --- */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Animate content changes with a key */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              {slides[currentIndex].title}
              <span className="block bg-primary bg-clip-text text-transparent">
                {slides[currentIndex].highlight}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {slides[currentIndex].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
              >
                Start Your Project
              </Button>
              </Link>
              <Link href="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 text-foreground hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                View Portfolio
              </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Scroll Indicators --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;