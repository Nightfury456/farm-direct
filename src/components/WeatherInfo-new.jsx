import React, { useState, useEffect } from 'react'
import {
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Droplets,
  Eye,
  Gauge,
  MapPin,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Info,
  Loader,
  RefreshCw,
  AlertCircle
} from 'lucide-react'

const WeatherInfo = () => {
  const [selectedLocation, setSelectedLocation] = useState('mumbai')
  const [weatherData, setWeatherData] = useState(null)
  const [allLocations, setAllLocations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refreshing, setRefreshing] = useState(false)

  const API_BASE_URL = '/api'

  // Icon mapping for dynamic weather icons
  const getWeatherIcon = (iconName) => {
    const iconMap = {
      'Sun': Sun,
      'Cloud': Cloud,
      'CloudRain': CloudRain
    }
    return iconMap[iconName] || Sun
  }

  // Fetch all available locations
  const fetchLocations = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/weather/locations/all`)
      if (!response.ok) throw new Error('Failed to fetch locations')
      const data = await response.json()
      setAllLocations(data)
    } catch (err) {
      console.error('Error fetching locations:', err)
      // Fallback to hardcoded locations
      setAllLocations([
        { id: 'current', name: 'Current Location', state: 'Auto-detect', country: 'India', distance: '0 km', isCurrentLocation: true },
        { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', country: 'India', distance: '15 km' },
        { id: 'pune', name: 'Pune', state: 'Maharashtra', country: 'India', distance: '45 km' },
        { id: 'thane', name: 'Thane', state: 'Maharashtra', country: 'India', distance: '8 km' }
      ])
    }
  }

  // Fetch weather data for selected location
  const fetchWeatherData = async (locationId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/weather/${locationId}`)
      if (!response.ok) throw new Error('Failed to fetch weather data')
      const data = await response.json()
      setWeatherData(data)
      setError(null)
    } catch (err) {
      console.error('Error fetching weather data:', err)
      setError('Failed to load weather data. Please try again.')
      // Set mock data as fallback
      setWeatherData({
        location: allLocations.find(loc => loc.id === locationId) || { name: 'Unknown Location' },
        currentWeather: {
          temperature: 28,
          condition: 'Partly Cloudy',
          humidity: 65,
          windSpeed: 12,
          visibility: 8,
          pressure: 1015,
          icon: 'Cloud'
        },
        forecast: [
          { day: 'Today', high: 30, low: 22, condition: 'Partly Cloudy', icon: 'Cloud' },
          { day: 'Tomorrow', high: 32, low: 24, condition: 'Sunny', icon: 'Sun' },
          { day: 'Wednesday', high: 29, low: 21, condition: 'Light Rain', icon: 'CloudRain' },
          { day: 'Thursday', high: 27, low: 19, condition: 'Cloudy', icon: 'Cloud' },
          { day: 'Friday', high: 31, low: 23, condition: 'Sunny', icon: 'Sun' }
        ],
        soilAnalysis: {
          moisture: 45,
          ph: 6.8,
          nitrogen: 78,
          phosphorus: 42,
          potassium: 156,
          temperature: 22
        },
        recommendations: [
          {
            type: 'irrigation',
            status: 'good',
            title: 'Irrigation Recommended',
            description: 'Soil moisture is at 45%. Consider light irrigation in the evening.',
            icon: 'Droplets',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
          }
        ],
        lastUpdated: new Date().toISOString(),
        source: 'fallback'
      })
    }
  }

  // Handle location change
  const handleLocationChange = async (locationId) => {
    setSelectedLocation(locationId)
    setLoading(true)
    await fetchWeatherData(locationId)
    setLoading(false)
  }

  // Refresh weather data
  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchWeatherData(selectedLocation)
    setRefreshing(false)
  }

  // Initial load
  useEffect(() => {
    const loadInitialData = async () => {
      await fetchLocations()
      await fetchWeatherData(selectedLocation)
      setLoading(false)
    }

    loadInitialData()
  }, [])

  // Auto-refresh every 10 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (!refreshing) {
        handleRefresh()
      }
    }, 10 * 60 * 1000)

    return () => clearInterval(interval)
  }, [selectedLocation, refreshing])

  if (loading) {
    return (
      <section id="weather" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Agricultural Intelligence
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <Loader className="h-5 w-5 animate-spin text-primary-600" />
              <span className="text-gray-600">Loading weather data...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error && !weatherData) {
    return (
      <section id="weather" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Agricultural Intelligence
            </h2>
            <div className="flex items-center justify-center space-x-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentLocation = allLocations.find(loc => loc.id === selectedLocation)
  const currentWeather = weatherData?.currentWeather
  const forecast = weatherData?.forecast || []
  const soilAnalysis = weatherData?.soilAnalysis
  const recommendations = weatherData?.recommendations || []

  return (
    <section id="weather" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Agricultural Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get real-time weather updates, soil analysis, and expert recommendations
            to optimize your farming decisions.
          </p>
        </div>

        {/* Location Selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Select Location</span>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center space-x-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {allLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationChange(location.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLocation === location.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>{location.name}</span>
                <span className="text-xs opacity-75">({location.distance})</span>
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 flex items-center justify-center space-x-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm">Using cached data - API connection issue</span>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Current Weather</h3>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-xs text-gray-500">
                    {weatherData?.source === 'fallback' ? 'Cached' : 'Live'}
                  </span>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-5xl mb-2">
                  {currentWeather && getWeatherIcon(currentWeather.icon) &&
                    React.createElement(getWeatherIcon(currentWeather.icon), {
                      className: "h-12 w-12 mx-auto text-primary-600"
                    })
                  }
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {currentWeather?.temperature || '--'}°C
                </div>
                <div className="text-gray-600">{currentWeather?.condition || 'Loading...'}</div>
                {currentWeather?.description && (
                  <div className="text-sm text-gray-500 mt-1 capitalize">
                    {currentWeather.description}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">
                    <span className="font-medium">{currentWeather?.humidity || '--'}%</span>
                    <span className="text-gray-500 ml-1">Humidity</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">
                    <span className="font-medium">{currentWeather?.windSpeed || '--'} km/h</span>
                    <span className="text-gray-500 ml-1">Wind</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">
                    <span className="font-medium">{currentWeather?.visibility || '--'} km</span>
                    <span className="text-gray-500 ml-1">Visibility</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gauge className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">
                    <span className="font-medium">{currentWeather?.pressure || '--'} hPa</span>
                    <span className="text-gray-500 ml-1">Pressure</span>
                  </span>
                </div>
              </div>

              {currentWeather?.feelsLike && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Feels like</span>
                    <span className="font-medium">{currentWeather.feelsLike}°C</span>
                  </div>
                  {currentWeather.uvIndex && (
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-600">UV Index</span>
                      <span className="font-medium">{currentWeather.uvIndex}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="lg:col-span-2">
            <div className="card mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">5-Day Forecast</h3>
                <Info className="h-5 w-5 text-gray-400" />
              </div>

              <div className="grid grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <div key={index} className="text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900 mb-2">{day.day}</div>
                    {day.icon && React.createElement(getWeatherIcon(day.icon), {
                      className: "h-8 w-8 mx-auto mb-2 text-primary-600"
                    })}
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      {day.high || '--'}°
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {day.low || '--'}°
                    </div>
                    <div className="text-xs text-gray-600">
                      {day.condition || 'N/A'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soil Analysis */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Soil Analysis</h3>
                <Thermometer className="h-5 w-5 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {soilAnalysis?.moisture || '--'}%
                  </div>
                  <div className="text-sm text-gray-600">Moisture</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {soilAnalysis?.ph || '--'}
                  </div>
                  <div className="text-sm text-gray-600">pH Level</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {soilAnalysis?.temperature || '--'}°C
                  </div>
                  <div className="text-sm text-gray-600">Soil Temp</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    {soilAnalysis?.nitrogen || '--'}
                  </div>
                  <div className="text-sm text-gray-600">Nitrogen</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {soilAnalysis?.phosphorus || '--'}
                  </div>
                  <div className="text-sm text-gray-600">Phosphorus</div>
                </div>
                <div className="text-center p-3 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600 mb-1">
                    {soilAnalysis?.potassium || '--'}
                  </div>
                  <div className="text-sm text-gray-600">Potassium</div>
                </div>
              </div>

              <div className="text-sm text-gray-600 text-center">
                Last updated: {new Date(weatherData?.lastUpdated).toLocaleString() || 'Recently'}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Smart Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="card border-l-4 border-l-primary-500">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 ${rec.bgColor} rounded-lg`}>
                    {rec.icon === 'Droplets' && <Droplets className={`h-5 w-5 ${rec.color}`} />}
                    {rec.icon === 'Thermometer' && <Thermometer className={`h-5 w-5 ${rec.color}`} />}
                    {rec.icon === 'Wind' && <Wind className={`h-5 w-5 ${rec.color}`} />}
                    {rec.icon === 'TrendingUp' && <TrendingUp className={`h-5 w-5 ${rec.color}`} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                      {rec.status === 'good' && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      {rec.status === 'warning' && (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{rec.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeatherInfo
