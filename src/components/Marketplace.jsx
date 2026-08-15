import React, { useState } from 'react'
import { Search, Filter, MapPin, Star, Package, Truck, Clock } from 'lucide-react'

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Crops', count: 156 },
    { id: 'vegetables', name: 'Vegetables', count: 45 },
    { id: 'fruits', name: 'Fruits', count: 32 },
    { id: 'grains', name: 'Grains', count: 28 },
    { id: 'organic', name: 'Organic', count: 51 }
  ]

  const crops = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      farmer: 'Ravi Kumar',
      location: 'Mumbai, Maharashtra',
      price: 80,
      unit: 'kg',
      rating: 4.8,
      reviews: 124,
      image: '🍅',
      quantity: '2kg available',
      organic: true,
      distance: '5.2 km',
      harvestDate: 'Today'
    },
    {
      id: 2,
      name: 'Organic Carrots',
      farmer: 'Priya Sharma',
      location: 'Pune, Maharashtra',
      price: 45,
      unit: 'kg',
      rating: 4.9,
      reviews: 89,
      image: '🥕',
      quantity: '5kg available',
      organic: true,
      distance: '12.1 km',
      harvestDate: 'Yesterday'
    },
    {
      id: 3,
      name: 'Sweet Mangoes',
      farmer: 'Amit Patel',
      location: 'Nashik, Maharashtra',
      price: 120,
      unit: 'kg',
      rating: 4.7,
      reviews: 203,
      image: '🥭',
      quantity: '10kg available',
      organic: false,
      distance: '8.7 km',
      harvestDate: 'Today'
    },
    {
      id: 4,
      name: 'Fresh Spinach',
      farmer: 'Sunita Devi',
      location: 'Thane, Maharashtra',
      price: 30,
      unit: 'bunch',
      rating: 4.6,
      reviews: 67,
      image: '🥬',
      quantity: '20 bunches available',
      organic: true,
      distance: '3.8 km',
      harvestDate: 'Today'
    },
    {
      id: 5,
      name: 'Rice (Basmati)',
      farmer: 'Rajesh Singh',
      location: 'Palghar, Maharashtra',
      price: 85,
      unit: 'kg',
      rating: 4.8,
      reviews: 156,
      image: '🌾',
      quantity: '50kg available',
      organic: false,
      distance: '15.3 km',
      harvestDate: '2 days ago'
    },
    {
      id: 6,
      name: 'Bell Peppers',
      farmer: 'Meera Iyer',
      location: 'Navi Mumbai',
      price: 65,
      unit: 'kg',
      rating: 4.5,
      reviews: 78,
      image: '🫑',
      quantity: '8kg available',
      organic: false,
      distance: '7.2 km',
      harvestDate: 'Today'
    }
  ]

  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.farmer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'organic' && crop.organic) ||
                           crop.name.toLowerCase().includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <section id="marketplace" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Fresh Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover fresh, quality crops directly from local farmers. Support your community 
            and enjoy the taste of truly fresh produce.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for crops, farmers, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Crop Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map((crop) => (
            <div key={crop.id} className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mb-2">{crop.image}</div>
                {crop.organic && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Organic
                  </span>
                )}
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {crop.name}
                  </h3>
                  <p className="text-sm text-gray-600">by {crop.farmer}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {crop.distance}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {crop.rating} ({crop.reviews})
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      ₹{crop.price}
                      <span className="text-sm font-normal text-gray-600">/{crop.unit}</span>
                    </div>
                    <div className="text-sm text-gray-600">{crop.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-green-600 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {crop.harvestDate}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    Add to Cart
                  </button>
                  <button className="btn-secondary text-sm px-3 py-2">
                    <Package className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Load More Crops
          </button>
        </div>
      </div>
    </section>
  )
}

export default Marketplace
