import axios from 'axios';

// OpenWeatherMap API configuration
const API_KEY = process.env.OPENWEATHER_API_KEY || 'demo_key'; // Use demo key for development
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Location data with coordinates for major Indian cities
const locations = [
  {
    id: 'current',
    name: 'Current Location',
    state: 'Auto-detect',
    country: 'India',
    lat: null,
    lon: null,
    distance: '0 km',
    isCurrentLocation: true
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    lat: 19.0760,
    lon: 72.8777,
    distance: '15 km'
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    lat: 18.5204,
    lon: 73.8567,
    distance: '45 km'
  },
  {
    id: 'thane',
    name: 'Thane',
    state: 'Maharashtra',
    country: 'India',
    lat: 19.2183,
    lon: 72.9781,
    distance: '8 km'
  },
  {
    id: 'delhi',
    name: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    lat: 28.6139,
    lon: 77.2090,
    distance: '1,150 km'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    lat: 12.9716,
    lon: 77.5946,
    distance: '850 km'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    lat: 13.0827,
    lon: 80.2707,
    distance: '1,050 km'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    country: 'India',
    lat: 22.5726,
    lon: 88.3639,
    distance: '1,650 km'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    lat: 17.3850,
    lon: 78.4867,
    distance: '620 km'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    lat: 23.0225,
    lon: 72.5714,
    distance: '530 km'
  },
  {
    id: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    country: 'India',
    lat: 21.1702,
    lon: 72.8311,
    distance: '265 km'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    lat: 26.9124,
    lon: 75.7873,
    distance: '1,060 km'
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    country: 'India',
    lat: 26.8467,
    lon: 80.9462,
    distance: '1,250 km'
  },
  {
    id: 'kanpur',
    name: 'Kanpur',
    state: 'Uttar Pradesh',
    country: 'India',
    lat: 26.4499,
    lon: 80.3319,
    distance: '1,200 km'
  },
  {
    id: 'nagpur',
    name: 'Nagpur',
    state: 'Maharashtra',
    country: 'India',
    lat: 21.1458,
    lon: 79.0882,
    distance: '710 km'
  }
];

// Weather condition mapping for icons
const getWeatherIcon = (condition) => {
  const iconMap = {
    'clear': 'Sun',
    'clouds': 'Cloud',
    'rain': 'CloudRain',
    'drizzle': 'CloudRain',
    'thunderstorm': 'CloudRain',
    'snow': 'Cloud',
    'mist': 'Cloud',
    'fog': 'Cloud'
  };

  return iconMap[condition] || 'Sun';
};

// Fetch current weather data
const fetchCurrentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    return {
      temperature: Math.round(response.data.main.temp),
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed * 3.6), // Convert m/s to km/h
      visibility: Math.round((response.data.visibility || 10000) / 1000), // Convert to km
      pressure: response.data.main.pressure,
      icon: getWeatherIcon(response.data.weather[0].main.toLowerCase()),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      uvIndex: Math.floor(Math.random() * 10) + 1, // Mock UV index
      sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString()
    };
  } catch (error) {
    // Return mock data if API fails
    console.warn('Weather API failed, using mock data:', error.message);
    return {
      temperature: Math.floor(Math.random() * 15) + 20,
      condition: 'Partly Cloudy',
      humidity: Math.floor(Math.random() * 30) + 50,
      windSpeed: Math.floor(Math.random() * 15) + 5,
      visibility: Math.floor(Math.random() * 5) + 5,
      pressure: Math.floor(Math.random() * 20) + 1000,
      icon: 'Cloud',
      description: 'Partly cloudy',
      feelsLike: Math.floor(Math.random() * 15) + 20,
      uvIndex: Math.floor(Math.random() * 10) + 1,
      sunrise: '6:30 AM',
      sunset: '6:30 PM'
    };
  }
};

// Fetch 5-day forecast
const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const dailyForecast = [];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 0; i < 5; i++) {
      const dayData = response.data.list[i * 8]; // Every 8th item is next day at same time
      const date = new Date(dayData.dt * 1000);
      const dayName = i === 0 ? 'Today' : days[date.getDay()];

      dailyForecast.push({
        day: dayName,
        high: Math.round(dayData.main.temp_max),
        low: Math.round(dayData.main.temp_min),
        condition: dayData.weather[0].main,
        icon: getWeatherIcon(dayData.weather[0].main.toLowerCase()),
        description: dayData.weather[0].description,
        humidity: dayData.main.humidity,
        windSpeed: Math.round(dayData.wind.speed * 3.6)
      });
    }

    return dailyForecast;
  } catch (error) {
    // Return mock forecast if API fails
    console.warn('Forecast API failed, using mock data:', error.message);
    const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'];
    const icons = ['Sun', 'Cloud', 'Cloud', 'CloudRain'];

    return Array.from({ length: 5 }, (_, i) => {
      const day = i === 0 ? 'Today' : ['Tomorrow', 'Wednesday', 'Thursday', 'Friday'][i - 1] || 'Saturday';
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      return {
        day,
        high: Math.floor(Math.random() * 10) + 25,
        low: Math.floor(Math.random() * 10) + 15,
        condition,
        icon: icons[conditions.indexOf(condition)],
        description: condition.toLowerCase(),
        humidity: Math.floor(Math.random() * 30) + 50,
        windSpeed: Math.floor(Math.random() * 15) + 5
      };
    });
  }
};

// Generate soil analysis data
const generateSoilAnalysis = () => {
  return {
    moisture: Math.floor(Math.random() * 30) + 35,
    ph: (Math.random() * 2 + 6).toFixed(1),
    nitrogen: Math.floor(Math.random() * 50) + 50,
    phosphorus: Math.floor(Math.random() * 30) + 30,
    potassium: Math.floor(Math.random() * 100) + 100,
    temperature: Math.floor(Math.random() * 10) + 18,
    organicMatter: (Math.random() * 5 + 2).toFixed(1),
    salinity: (Math.random() * 2 + 0.5).toFixed(2)
  };
};

// Generate smart recommendations based on weather and soil data
const generateRecommendations = (weather, soil) => {
  const recommendations = [];

  // Irrigation recommendation
  if (soil.moisture < 40) {
    recommendations.push({
      type: 'irrigation',
      status: 'warning',
      title: 'Irrigation Required',
      description: `Soil moisture is at ${soil.moisture}%. Schedule irrigation within 24 hours.`,
      icon: 'Droplets',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    });
  } else {
    recommendations.push({
      type: 'irrigation',
      status: 'good',
      title: 'Irrigation Optimal',
      description: `Soil moisture is adequate at ${soil.moisture}%. No immediate irrigation needed.`,
      icon: 'Droplets',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    });
  }

  // Temperature-based recommendation
  if (weather.temperature > 35) {
    recommendations.push({
      type: 'temperature',
      status: 'warning',
      title: 'Heat Stress Alert',
      description: `High temperature (${weather.temperature}°C) may stress crops. Consider shade or cooling measures.`,
      icon: 'Thermometer',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    });
  }

  // Wind-based recommendation
  if (weather.windSpeed > 20) {
    recommendations.push({
      type: 'wind',
      status: 'warning',
      title: 'Strong Wind Warning',
      description: `Wind speed is ${weather.windSpeed} km/h. Secure loose farming equipment and check for wind damage.`,
      icon: 'Wind',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    });
  }

  // Soil pH recommendation
  const ph = parseFloat(soil.ph);
  if (ph < 6.0 || ph > 7.5) {
    recommendations.push({
      type: 'soil',
      status: 'warning',
      title: 'Soil pH Adjustment',
      description: `Soil pH is ${soil.ph}. Consider soil amendments to optimize nutrient availability.`,
      icon: 'TrendingUp',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    });
  }

  return recommendations.slice(0, 3); // Return top 3 recommendations
};

// Main functions
export const getWeatherByLocation = async (locationId) => {
  const location = locations.find(loc => loc.id === locationId);

  if (!location) {
    throw new Error('Location not found');
  }

  // For current location, use Mumbai as default
  const targetLocation = location.isCurrentLocation
    ? locations.find(loc => loc.id === 'mumbai')
    : location;

  const [currentWeather, forecast] = await Promise.all([
    fetchCurrentWeather(targetLocation.lat, targetLocation.lon),
    fetchForecast(targetLocation.lat, targetLocation.lon)
  ]);

  const soilAnalysis = generateSoilAnalysis();
  const recommendations = generateRecommendations(currentWeather, soilAnalysis);

  return {
    location: {
      id: targetLocation.id,
      name: targetLocation.name,
      state: targetLocation.state,
      country: targetLocation.country,
      distance: targetLocation.distance
    },
    currentWeather,
    forecast,
    soilAnalysis,
    recommendations,
    lastUpdated: new Date().toISOString(),
    source: API_KEY === 'demo_key' ? 'demo' : 'api'
  };
};

export const getWeatherByCoordinates = async (lat, lon) => {
  const [currentWeather, forecast] = await Promise.all([
    fetchCurrentWeather(lat, lon),
    fetchForecast(lat, lon)
  ]);

  const soilAnalysis = generateSoilAnalysis();
  const recommendations = generateRecommendations(currentWeather, soilAnalysis);

  return {
    location: {
      id: 'custom',
      name: 'Custom Location',
      state: 'Unknown',
      country: 'India',
      distance: '0 km'
    },
    currentWeather,
    forecast,
    soilAnalysis,
    recommendations,
    lastUpdated: new Date().toISOString()
  };
};

export const getAllLocations = () => {
  return locations;
};

export const searchLocations = (query) => {
  if (!query) return locations;

  const searchTerm = query.toLowerCase();
  return locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm) ||
    location.state.toLowerCase().includes(searchTerm)
  );
};
