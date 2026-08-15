import { searchLocations } from "../_weatherService.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") return res.status(200).end();
  try {
    const { q } = req.query;
    return res.json(searchLocations(q));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
