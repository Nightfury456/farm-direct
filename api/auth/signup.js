// In-memory store (resets on cold starts - for demo purposes)
const users = [];

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, password, phone, location, userType } = req.body;

  if (!name || !email || !password || !phone || !location) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ error: "User with this email already exists" });
  }

  const newUser = {
    id: Date.now(),
    name, email, password, phone, location,
    userType: userType || "consumer",
    createdAt: new Date().toISOString(),
    isActive: true,
  };
  users.push(newUser);

  const { password: _, ...userResponse } = newUser;
  return res.status(201).json({ message: "Account created successfully", user: userResponse });
}
