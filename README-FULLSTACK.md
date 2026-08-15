# FarmDirect - Full Stack Farm to Consumer Marketplace

A complete full-stack web application that connects farmers directly with consumers, featuring real-time weather intelligence and agricultural insights.

## 🌾 Project Overview

FarmDirect is a modern full-stack application built with:
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express.js + OpenWeatherMap API
- **Database**: RESTful API architecture (ready for database integration)

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free)

### 1. Clone and Setup
```bash
cd FarmDirect
npm install  # Install frontend dependencies
```

### 2. Setup Backend
```bash
cd backend
npm install  # Install backend dependencies

# Create environment file
echo "OPENWEATHER_API_KEY=your_api_key_here" > .env
echo "PORT=5000" >> .env
echo "NODE_ENV=development" >> .env
```

### 3. Get OpenWeatherMap API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Replace `your_api_key_here` in `backend/.env`

### 4. Run the Full Stack Application

**Terminal 1 - Start Backend API:**
```bash
cd backend
npm run dev
```
✅ Backend will start on http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
# From project root (FarmDirect/)
npm run dev
```
✅ Frontend will start on http://localhost:3000

### 5. Open Your Browser
Navigate to **http://localhost:3000** to view the application

## 🏗️ Project Architecture

```
FarmDirect/
├── backend/                    # Node.js/Express API Server
│   ├── routes/
│   │   └── weather.js         # Weather API endpoints
│   ├── services/
│   │   └── weatherService.js  # Business logic & API integrations
│   ├── server.js              # Main Express server
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Environment variables
│   └── README.md              # Backend documentation
├── src/                       # React Frontend
│   ├── components/
│   │   ├── WeatherInfo.jsx    # Real-time weather component ⭐
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Features.jsx       # Feature showcase
│   │   ├── Marketplace.jsx    # Crop marketplace
│   │   └── Footer.jsx         # Footer with links
│   ├── App.jsx               # Main React application
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── public/                   # Static assets
├── package.json              # Frontend dependencies
├── vite.config.js            # Vite configuration (with API proxy)
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🌐 Full Stack Features

### Frontend (React + Vite)
- **Modern React 18** with hooks and functional components
- **Real-time Weather Dashboard** with 15+ Indian cities
- **Responsive Design** - mobile, tablet, desktop optimized
- **Interactive UI** with loading states and error handling
- **API Integration** with automatic proxy configuration

### Backend (Node.js + Express)
- **RESTful API** with comprehensive weather endpoints
- **OpenWeatherMap Integration** for real-time weather data
- **CORS Enabled** for cross-origin requests
- **Error Handling** with graceful fallback to mock data
- **Environment Configuration** for different deployment stages

### Weather Intelligence System
- **15+ Indian Cities** across all major states
- **5-Day Weather Forecast** with detailed metrics
- **Soil Analysis Dashboard** with NPK monitoring
- **Smart Recommendations** based on weather and soil data
- **Auto-refresh** every 10 minutes with manual refresh option

## 📊 API Endpoints

### Weather Data
- `GET /api/weather/:locationId` - Get weather data for specific location
- `GET /api/weather/locations/all` - Get all available locations
- `GET /api/weather/locations/search?q=query` - Search locations
- `GET /api/health` - API health check

### Response Format
```json
{
  "location": {
    "id": "mumbai",
    "name": "Mumbai",
    "state": "Maharashtra",
    "country": "India"
  },
  "currentWeather": {
    "temperature": 28,
    "condition": "Partly Cloudy",
    "humidity": 65,
    "windSpeed": 12,
    "pressure": 1015,
    "feelsLike": 30,
    "uvIndex": 6
  },
  "forecast": [...],
  "soilAnalysis": {...},
  "recommendations": [...]
}
```

## 🔧 Development Scripts

### Frontend
```bash
npm run dev     # Start development server with hot reload
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

### Backend
```bash
npm start       # Start production server
npm run dev     # Start development server with auto-restart (nodemon)
```

## ⚡ Development Workflow

### Adding New Features
1. **Frontend**: Add new components in `src/components/`
2. **Backend**: Add new routes in `backend/routes/`
3. **API Integration**: Update services in `backend/services/`
4. **Styling**: Use Tailwind CSS classes throughout

### Database Integration (Future)
The backend is designed to easily integrate with:
- PostgreSQL / MySQL for relational data
- MongoDB for document storage
- Redis for caching and sessions

### Deployment Ready
- **Frontend**: Optimized Vite build for static hosting
- **Backend**: Express server ready for cloud deployment
- **Environment Variables**: Configurable for different environments

## 🌦️ Weather System Details

### Supported Locations
- **Maharashtra**: Mumbai, Pune, Thane, Nagpur
- **Delhi NCR**: New Delhi, Lucknow, Kanpur
- **South India**: Bangalore, Chennai, Hyderabad
- **East India**: Kolkata
- **West India**: Ahmedabad, Surat, Jaipur
- **Auto-detect**: Current location support

### Real-time Features
- **Live Weather Updates** every 10 minutes
- **Fallback System** with mock data when API unavailable
- **Error Handling** with user-friendly messages
- **Loading States** for better UX

## 🛠️ Technology Stack

### Frontend
- **React 18** - Component-based UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon system
- **Framer Motion** - Animation library (ready to use)

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Axios** - HTTP client for external APIs
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### External APIs
- **OpenWeatherMap API** - Real-time weather data
- **Geolocation API** - Location services (future feature)

## 📱 Responsive Design

Optimized for all device sizes:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Screen**: 1280px and up

## 🚨 Troubleshooting

### Common Issues

**Backend not starting:**
- Check if port 5000 is available
- Verify `.env` file exists in backend directory
- Run `npm install` in backend folder

**Frontend not loading weather data:**
- Ensure backend is running on port 5000
- Check browser console for API errors
- Verify proxy configuration in `vite.config.js`

**API rate limits:**
- OpenWeatherMap free tier: 1000 calls/day
- System includes fallback to demo data

## 📞 Support & Documentation

- **Frontend**: See component documentation in source files
- **Backend**: See `backend/README.md` for API documentation
- **API**: OpenWeatherMap integration guide included

## 📄 License

This project is built for farmers and consumers to create a sustainable agricultural ecosystem.

---

*Made with ❤️ for the farming community - Full Stack Edition*
