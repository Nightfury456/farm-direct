# FarmDirect Backend API

Backend API for FarmDirect weather and agricultural intelligence system.

## Features

- **Real-time Weather Data**: Integration with OpenWeatherMap API
- **Multi-location Support**: Weather data for 15+ Indian cities
- **5-Day Forecast**: Detailed weather predictions
- **Soil Analysis**: Smart soil condition monitoring
- **Smart Recommendations**: AI-powered farming recommendations
- **Fallback System**: Mock data when API is unavailable

## Setup

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Configuration**
   - Create `.env` file in backend directory
   - Add your OpenWeatherMap API key:
     ```
     OPENWEATHER_API_KEY=your_api_key_here
     PORT=5000
     NODE_ENV=development
     ```

3. **Get OpenWeatherMap API Key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Generate a free API key
   - Replace `demo_key` in `.env` with your actual key

4. **Start the Server**
   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Weather Data
- `GET /api/weather/:locationId` - Get weather data for specific location
- `GET /api/weather/coordinates/:lat/:lon` - Get weather data by coordinates
- `GET /api/weather/locations/all` - Get all available locations
- `GET /api/weather/locations/search?q=query` - Search locations

### Health Check
- `GET /api/health` - API health status

## Supported Locations

The API supports weather data for major Indian cities including:
- Mumbai, Pune, Thane (Maharashtra)
- Delhi, Lucknow, Kanpur (North India)
- Bangalore, Chennai, Hyderabad (South India)
- Kolkata (East India)
- Ahmedabad, Surat, Jaipur (West India)
- And more...

## Response Format

```json
{
  "location": {
    "id": "mumbai",
    "name": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "distance": "15 km"
  },
  "currentWeather": {
    "temperature": 28,
    "condition": "Partly Cloudy",
    "humidity": 65,
    "windSpeed": 12,
    "visibility": 8,
    "pressure": 1015,
    "icon": "Cloud",
    "feelsLike": 30,
    "uvIndex": 6
  },
  "forecast": [
    {
      "day": "Today",
      "high": 30,
      "low": 22,
      "condition": "Partly Cloudy",
      "icon": "Cloud"
    }
    // ... 5 days total
  ],
  "soilAnalysis": {
    "moisture": 45,
    "ph": 6.8,
    "nitrogen": 78,
    "phosphorus": 42,
    "potassium": 156,
    "temperature": 22
  },
  "recommendations": [
    {
      "type": "irrigation",
      "status": "good",
      "title": "Irrigation Recommended",
      "description": "Soil moisture is at 45%. Consider light irrigation.",
      "icon": "Droplets",
      "color": "text-blue-600",
      "bgColor": "bg-blue-50"
    }
  ],
  "lastUpdated": "2024-01-01T10:30:00.000Z",
  "source": "api"
}
```

## Error Handling

The API includes comprehensive error handling:
- Graceful fallback to mock data when API fails
- Proper HTTP status codes
- Detailed error messages
- CORS support for frontend integration

## Development

- Uses ES6 modules
- Express.js for API framework
- Axios for HTTP requests
- CORS enabled for frontend communication
- Environment-based configuration

## License

MIT License - see main project LICENSE file.
