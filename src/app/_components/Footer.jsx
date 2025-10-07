import React from 'react'
import { Building } from 'lucide-react'
import Link from 'next/link'
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
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/services">Commercial Construction</Link></li>
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/services">Residential Building</Link></li>
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/services">Project Management</Link></li>
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/services">Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/about">About Us</Link></li>
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/gallery" >Gallery</Link></li>
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/career">Careers</Link></li>
                <li className="hover:text-primary cursor-pointer transition-colors"><Link href="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>+91 7870429977</li>
                <li>tmsaverabuild@gmail.com</li>
                <li>302 SN MEHRA PALACE, NEAR ROTI RESTURENT</li>
                <li> BORING ROAD PATNA, 800013</li>
              </ul>
            </div>
          </div>

        <div className="border-t border-gray-800 mt-12 flex pt-8 justify-between text-gray-500">
  <p>&copy; {new Date().getFullYear()} TM SAVERA. All rights reserved.</p>
  <p>Developed by <Link href="https://www.dinestx.com" className='text-gray-300'>Dinestx</Link> </p>
</div>
        </div>
      </footer></div>
  )
}

export default Footer