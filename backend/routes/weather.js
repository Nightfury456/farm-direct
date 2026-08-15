import express from 'express';
import {
  getWeatherByLocation,
  getWeatherByCoordinates,
  getAllLocations,
  searchLocations
} from '../services/weatherService.js';

const router = express.Router();

// Get weather data for a specific location
router.get('/:locationId', async (req, res) => {
  try {
    const { locationId } = req.params;
    const weatherData = await getWeatherByLocation(locationId);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get weather data by coordinates
router.get('/coordinates/:lat/:lon', async (req, res) => {
  try {
    const { lat, lon } = req.params;
    const weatherData = await getWeatherByCoordinates(lat, lon);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all available locations
router.get('/locations/all', async (req, res) => {
  try {
    const locations = await getAllLocations();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search locations
router.get('/locations/search', async (req, res) => {
  try {
    const { q } = req.query;
    const locations = await searchLocations(q);
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
