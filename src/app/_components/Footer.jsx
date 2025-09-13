import React from 'react'
import { Building } from 'lucide-react'
function Footer() {
  return (
    <div>     <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-black" />
                </div>
                <span className="text-2xl font-bold">TM SAVERA</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building excellence since 1999. Your trusted partner for transforming visions into architectural
                reality.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Commercial Construction</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Residential Building</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Project Management</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Our Team</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-primary cursor-pointer transition-colors">News</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@buildcorp.com</li>
                <li>123 Construction Ave</li>
                <li>Builder City, BC 12345</li>
              </ul>
            </div>
          </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
  <p>&copy; {new Date().getFullYear()} TM SAVERA. All rights reserved. Transforming skylines, building futures.</p>
</div>
        </div>
      </footer></div>
  )
}

export default Footer