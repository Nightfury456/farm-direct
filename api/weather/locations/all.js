import { getAllLocations } from "../_weatherService.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();
  try {
    const locations = getAllLocations();
    return res.json(locations);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
