import React from 'react'
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">FarmDirect</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting farmers directly with consumers. Fresh produce, fair prices, 
              and sustainable farming practices for a better tomorrow.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#marketplace" className="block text-gray-300 hover:text-white transition-colors">
                Marketplace
              </a>
              <a href="#weather" className="block text-gray-300 hover:text-white transition-colors">
                Weather & Info
              </a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* For Farmers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Farmers</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Sell Your Crops
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Weather Tools
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Soil Analysis
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Market Insights
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Farming Tips
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Support Center
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  support@farmdirect.com
                </span>
              </div>
            </div>
            <div className="pt-4">
              <button className="btn-primary w-full">
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>© 2024 FarmDirect. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for farmers</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  )
}

export default Footer
