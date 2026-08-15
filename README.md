# FarmDirect - Full Stack Farm to Consumer Marketplace

A complete full-stack web application that connects farmers directly with consumers, featuring real-time weather intelligence and agricultural insights.

## 🌾 Features

### For Farmers
- **Direct Marketplace**: Sell crops without intermediaries
- **Real-time Weather Intelligence**: Live weather updates for 15+ Indian cities
- **5-Day Weather Forecast**: Detailed predictions for planning
- **Soil Analysis**: Monitor soil health with smart recommendations
- **Smart Recommendations**: AI-powered farming advice based on weather and soil data

### For Consumers
- **Fresh Produce**: Access to freshly harvested crops
- **Local Farmers**: Support nearby farming communities
- **Transparent Pricing**: Fair prices without markup
- **Quality Guarantee**: Verified quality standards

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone and Setup
```bash
cd FarmDirect
npm run install:all  # Install all dependencies
```

### 2. Setup Backend
```bash
# Create .env file with your OpenWeatherMap API key
npm run setup  # Creates backend/.env from template
```

Then edit `backend/.env` and replace `demo_key` with your actual API key.

### 3. Get OpenWeatherMap API Key (Free)
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Edit `backend/.env` and replace `demo_key` with your actual API key

### 4. Run the Full Stack Application

**Option A - Run Both Simultaneously:**
```bash
npm run dev:full  # Starts both frontend and backend
```

**Option B - Run Separately:**

Terminal 1 - Backend:
```bash
cd backend && npm run dev
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### 5. Open Your Browser
Navigate to **http://localhost:3000** to view the application

## 🏗️ Project Structure

```
FarmDirect/
├── backend/                 # Node.js/Express API Server
│   ├── routes/             # API route handlers
│   ├── services/           # Business logic and API integrations
│   ├── server.js           # Main Express server
│   ├── package.json        # Backend dependencies
│   └── .env               # Environment variables
├── src/                    # React Frontend
│   ├── components/         # React components
│   │   ├── WeatherInfo.jsx # Real-time weather component ⭐
│   │   ├── Header.jsx      # Navigation header
│   │   └── ...             # Other components
│   ├── App.jsx            # Main React app
│   └── main.jsx           # React entry point
├── package.json           # Frontend dependencies
├── vite.config.js         # Vite configuration (with API proxy)
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🌐 Full Stack Architecture

### Frontend (React + Vite)
- **Modern React 18** with hooks and functional components
- **Real-time API Integration** with automatic proxy to backend
- **Responsive Design** optimized for all devices
- **Interactive Weather Dashboard** with loading states

### Backend (Node.js + Express)
- **RESTful API** with comprehensive weather endpoints
- **OpenWeatherMap Integration** for real-time weather data
- **CORS Enabled** for cross-origin requests
- **Error Handling** with graceful fallback to mock data

### Weather Intelligence
- **15+ Indian Cities** across all major states
- **5-Day Weather Forecast** with detailed metrics
- **Soil Analysis** with NPK monitoring
- **Smart Recommendations** based on weather and soil conditions

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start frontend development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start backend production server
- `npm run dev` - Start backend development server

### Full Stack
- `npm run dev:full` - Start both frontend and backend simultaneously
- `npm run install:all` - Install all frontend and backend dependencies
- `npm run setup` - Create environment file from template

## 🔑 API Integration

### OpenWeatherMap Setup
1. Get free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Add to `backend/.env`:
   ```
   OPENWEATHER_API_KEY=your_actual_api_key
   ```
3. The system will use demo data if API key is not configured

### API Endpoints
- `GET /api/weather/:locationId` - Weather data by location
- `GET /api/weather/locations/all` - List all locations
- `GET /api/weather/locations/search` - Search locations
- `GET /api/health` - Health check

## 🌦️ Weather Features

### Supported Locations
- **Maharashtra**: Mumbai, Pune, Thane, Nagpur
- **Delhi NCR**: New Delhi, Lucknow, Kanpur
- **South India**: Bangalore, Chennai, Hyderabad
- **East India**: Kolkata
- **West India**: Ahmedabad, Surat, Jaipur

### Real-time Data
- Current temperature, humidity, wind speed, visibility
- 5-day forecast with high/low temperatures
- UV index, feels-like temperature, atmospheric pressure
- Soil analysis (moisture, pH, NPK levels)
- Smart farming recommendations

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern JavaScript library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **OpenWeatherMap API** - Real-time weather data
- **Axios** - HTTP client for API requests
- **CORS** - Cross-origin resource sharing

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🚨 Troubleshooting

### Backend Not Starting
- Check if port 5000 is available
- Verify `.env` file exists with valid API key
- Run `npm install` in backend directory

### Frontend Not Loading Weather Data
- Ensure backend is running on port 5000
- Check browser console for API errors
- Verify proxy configuration in `vite.config.js`

### API Rate Limits
- OpenWeatherMap free tier: 1000 calls/day
- Consider upgrading for production use
- System includes fallback to demo data

## 📞 Support

For support or questions:
- Email: support@farmdirect.com
- Location: Mumbai, Maharashtra, India

## 📄 License

This project is built for farmers and consumers to create a sustainable agricultural ecosystem.

---

*Made with ❤️ for the farming community - Full Stack Edition*
