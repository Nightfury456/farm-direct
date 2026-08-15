import React from 'react'
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react'
import { useAuth } from './AuthContext'

const Hero = () => {
  const { openAuthModal } = useAuth()

  const handleStartSelling = () => {
    openAuthModal('signup')
  }

  const handleBrowseCrops = () => {
    // Scroll to marketplace section or navigate to marketplace
    document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Direct from
                <span className="text-primary-600"> Farm</span> to
                <span className="text-primary-600"> You</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect farmers directly with consumers. Sell your crops without middlemen,
                get fair prices, and help consumers access fresh, quality produce.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleStartSelling}
                className="btn-primary flex items-center justify-center text-lg px-8 py-3"
              >
                Start Selling
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={handleBrowseCrops}
                className="btn-secondary flex items-center justify-center text-lg px-8 py-3"
              >
                Browse Crops
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-gray-600">Consumers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100+</div>
                <div className="text-sm text-gray-600">Crop Types</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Mock marketplace preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      🌾
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Fresh Tomatoes</div>
                      <div className="text-sm text-gray-600">Organic • 2kg</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">₹80/kg</div>
                    <div className="text-xs text-gray-500">Available now</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      🥕
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Carrots</div>
                      <div className="text-sm text-gray-600">Fresh • 1kg</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange-600">₹45/kg</div>
                    <div className="text-xs text-gray-500">In season</div>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Weather Info</div>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span className="flex items-center text-blue-600">
                      🌤️ 28°C
                    </span>
                    <span className="flex items-center text-green-600">
                      💧 65%
                    </span>
                    <span className="flex items-center text-yellow-600">
                      🌱 Good
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
