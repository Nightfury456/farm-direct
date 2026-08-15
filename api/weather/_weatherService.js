import axios from "axios";

const API_KEY = process.env.OPENWEATHER_API_KEY || "demo_key";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const locations = [
  { id: "current", name: "Current Location", state: "Auto-detect", country: "India", lat: null, lon: null, distance: "0 km", isCurrentLocation: true },
  { id: "mumbai", name: "Mumbai", state: "Maharashtra", country: "India", lat: 19.0760, lon: 72.8777, distance: "15 km" },
  { id: "pune", name: "Pune", state: "Maharashtra", country: "India", lat: 18.5204, lon: 73.8567, distance: "45 km" },
  { id: "delhi", name: "New Delhi", state: "Delhi", country: "India", lat: 28.6139, lon: 77.2090, distance: "120 km" },
  { id: "bengaluru", name: "Bengaluru", state: "Karnataka", country: "India", lat: 12.9716, lon: 77.5946, distance: "80 km" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana", country: "India", lat: 17.3850, lon: 78.4867, distance: "60 km" },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu", country: "India", lat: 13.0827, lon: 80.2707, distance: "90 km" },
  { id: "kolkata", name: "Kolkata", state: "West Bengal", country: "India", lat: 22.5726, lon: 88.3639, distance: "200 km" },
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat", country: "India", lat: 23.0225, lon: 72.5714, distance: "100 km" },
  { id: "jaipur", name: "Jaipur", state: "Rajasthan", country: "India", lat: 26.9124, lon: 75.7873, distance: "150 km" },
];

const getWeatherIcon = (condition) => {
  const iconMap = { "clear sky": "Sun", "few clouds": "Cloud", "scattered clouds": "Cloud", "broken clouds": "Cloud", "shower rain": "CloudRain", "rain": "CloudRain", "thunderstorm": "Zap", "snow": "CloudSnow", "mist": "Wind" };
  return iconMap[condition] || "Cloud";
};

const getMockWeather = () => ({
  temperature: Math.floor(Math.random() * 15) + 20,
  condition: "Partly Cloudy", humidity: Math.floor(Math.random() * 30) + 50,
  windSpeed: Math.floor(Math.random() * 15) + 5, visibility: Math.floor(Math.random() * 5) + 5,
  pressure: Math.floor(Math.random() * 20) + 1000, icon: "Cloud", description: "Partly cloudy",
  feelsLike: Math.floor(Math.random() * 15) + 20, uvIndex: Math.floor(Math.random() * 10) + 1,
  sunrise: "6:30 AM", sunset: "6:30 PM"
});

const getMockForecast = () => {
  const conditions = ["Sunny", "Partly Cloudy", "Cloudy", "Light Rain"];
  const icons = ["Sun", "Cloud", "Cloud", "CloudRain"];
  return Array.from({ length: 5 }, (_, i) => {
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    return { day: i === 0 ? "Today" : ["Tomorrow", "Wednesday", "Thursday", "Friday"][i - 1] || "Saturday", high: Math.floor(Math.random() * 10) + 25, low: Math.floor(Math.random() * 10) + 15, condition, icon: icons[conditions.indexOf(condition)], description: condition.toLowerCase(), humidity: Math.floor(Math.random() * 30) + 50, windSpeed: Math.floor(Math.random() * 15) + 5 };
  });
};

const fetchCurrentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const d = response.data;
    return { temperature: Math.round(d.main.temp), condition: d.weather[0].main, humidity: d.main.humidity, windSpeed: Math.round(d.wind.speed * 3.6), visibility: Math.round((d.visibility || 10000) / 1000), pressure: d.main.pressure, icon: getWeatherIcon(d.weather[0].description), description: d.weather[0].description, feelsLike: Math.round(d.main.feels_like), uvIndex: 5, sunrise: new Date(d.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }), sunset: new Date(d.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) };
  } catch { return getMockWeather(); }
};

const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return Array.from({ length: 5 }, (_, i) => {
      const dayData = response.data.list[i * 8];
      const date = new Date(dayData.dt * 1000);
      return { day: i === 0 ? "Today" : days[date.getDay()], high: Math.round(dayData.main.temp_max), low: Math.round(dayData.main.temp_min), condition: dayData.weather[0].main, icon: getWeatherIcon(dayData.weather[0].main.toLowerCase()), description: dayData.weather[0].description, humidity: dayData.main.humidity, windSpeed: Math.round(dayData.wind.speed * 3.6) };
    });
  } catch { return getMockForecast(); }
};

const generateSoilAnalysis = () => ({ moisture: Math.floor(Math.random() * 30) + 35, ph: (Math.random() * 2 + 6).toFixed(1), nitrogen: Math.floor(Math.random() * 50) + 50, phosphorus: Math.floor(Math.random() * 30) + 30, potassium: Math.floor(Math.random() * 100) + 100, temperature: Math.floor(Math.random() * 10) + 18, organicMatter: (Math.random() * 5 + 2).toFixed(1), salinity: (Math.random() * 2 + 0.5).toFixed(2) });

const generateRecommendations = (weather, soil) => {
  const recs = [];
  if (soil.moisture < 40) recs.push({ type: "irrigation", status: "warning", title: "Irrigation Required", description: `Soil moisture at ${soil.moisture}%. Schedule irrigation within 24 hours.`, icon: "Droplets", color: "text-orange-600", bgColor: "bg-orange-50" });
  else recs.push({ type: "irrigation", status: "good", title: "Irrigation Optimal", description: `Soil moisture adequate at ${soil.moisture}%. No immediate irrigation needed.`, icon: "Droplets", color: "text-green-600", bgColor: "bg-green-50" });
  if (weather.temperature > 35) recs.push({ type: "temperature", status: "warning", title: "Heat Stress Alert", description: `High temperature (${weather.temperature}C) may stress crops. Consider shade or cooling measures.`, icon: "Thermometer", color: "text-red-600", bgColor: "bg-red-50" });
  if (weather.windSpeed > 20) recs.push({ type: "wind", status: "warning", title: "Strong Wind Warning", description: `Wind speed is ${weather.windSpeed} km/h. Secure farming equipment.`, icon: "Wind", color: "text-yellow-600", bgColor: "bg-yellow-50" });
  const ph = parseFloat(soil.ph);
  if (ph < 6.0 || ph > 7.5) recs.push({ type: "soil", status: "warning", title: "Soil pH Adjustment", description: `Soil pH is ${soil.ph}. Consider soil amendments.`, icon: "TrendingUp", color: "text-purple-600", bgColor: "bg-purple-50" });
  return recs.slice(0, 3);
};

export const getWeatherByLocation = async (locationId) => {
  const location = locations.find(loc => loc.id === locationId);
  if (!location) throw new Error("Location not found");
  const target = location.isCurrentLocation ? locations.find(l => l.id === "mumbai") : location;
  const [currentWeather, forecast] = await Promise.all([fetchCurrentWeather(target.lat, target.lon), fetchForecast(target.lat, target.lon)]);
  const soilAnalysis = generateSoilAnalysis();
  const recommendations = generateRecommendations(currentWeather, soilAnalysis);
  return { location: { id: target.id, name: target.name, state: target.state, country: target.country, distance: target.distance }, currentWeather, forecast, soilAnalysis, recommendations, lastUpdated: new Date().toISOString() };
};

export const getAllLocations = () => locations;
export const searchLocations = (query) => {
  if (!query) return locations;
  const q = query.toLowerCase();
  return locations.filter(l => l.name.toLowerCase().includes(q) || l.state.toLowerCase().includes(q));
};
