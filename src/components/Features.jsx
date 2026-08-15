import React from 'react'
import { 
  ShoppingCart, 
  Cloud, 
  Droplets, 
  Thermometer, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  MapPin,
  Award,
  Heart,
  Zap
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Direct Marketplace",
      description: "Sell your crops directly to consumers without middlemen. Get fair prices and build direct relationships.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Cloud,
      title: "Weather Intelligence",
      description: "Get real-time weather updates, forecasts, and agricultural advice tailored to your location.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Droplets,
      title: "Soil & Water Analysis",
      description: "Understand your soil health and get irrigation recommendations to optimize crop yield.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Access real-time market prices, demand trends, and selling strategies for better profits.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Build trust with verified quality standards and transparent farming practices.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Clock,
      title: "Quick Transactions",
      description: "Fast and secure payment processing with multiple payment options for both farmers and buyers.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides comprehensive tools and insights to help farmers thrive 
            and consumers get the freshest produce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Join Thousands of Successful Farmers
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our platform has helped farmers increase their profits by up to 40% 
                  while providing consumers with fresher, more affordable produce.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-primary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Community Support</div>
                      <div className="text-sm text-gray-600">Connect with other farmers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-primary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Quality Recognition</div>
                      <div className="text-sm text-gray-600">Earn badges for excellence</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-8 w-8 text-primary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Local Focus</div>
                      <div className="text-sm text-gray-600">Support nearby farmers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-primary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Sustainable Farming</div>
                      <div className="text-sm text-gray-600">Promote eco-friendly practices</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
                    <div className="text-gray-900 font-medium mb-1">Average Profit Increase</div>
                    <div className="text-sm text-gray-600 mb-4">Based on our farmer network</div>
                    <div className="flex justify-center space-x-2">
                      {[1,2,3,4,5].map((star) => (
                        <span key={star} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
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

export default Features
