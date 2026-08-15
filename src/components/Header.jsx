import React, { useState } from 'react'
import { Menu, X, Search, User, ShoppingCart, Leaf, LogOut } from 'lucide-react'
import { useAuth } from './AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, openAuthModal, signOut } = useAuth()

  const handleSignInClick = () => {
    openAuthModal('signin')
  }

  const handleSignOut = () => {
    signOut()
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">FarmDirect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </a>
            <a href="#marketplace" className="text-gray-700 hover:text-primary-600 transition-colors">
              Marketplace
            </a>
            <a href="#weather" className="text-gray-700 hover:text-primary-600 transition-colors">
              Weather & Info
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </a>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search crops..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
              />
            </div>
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {user.name || user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignInClick}
                className="btn-primary"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </a>
              <a href="#marketplace" className="text-gray-700 hover:text-primary-600 transition-colors">
                Marketplace
              </a>
              <a href="#weather" className="text-gray-700 hover:text-primary-600 transition-colors">
                Weather & Info
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </a>

              {user ? (
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {user.name || user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors w-full"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleSignInClick}
                    className="w-full btn-primary text-center"
                  >
                    Sign In
                  </button>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Search crops..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
