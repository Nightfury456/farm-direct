import express from 'express'

const router = express.Router()

// Mock user database (in a real app, this would be a proper database)
const users = []

// Sign Up
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phone, location, userType } = req.body

    // Basic validation
    if (!name || !email || !password || !phone || !location) {
      return res.status(400).json({
        error: 'All fields are required'
      })
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      return res.status(409).json({
        error: 'User with this email already exists'
      })
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password: password, // In a real app, this would be hashed
      phone,
      location,
      userType: userType || 'consumer',
      createdAt: new Date().toISOString(),
      isActive: true
    }

    users.push(newUser)

    // Return user data (excluding password)
    const { password: _, ...userResponse } = newUser

    res.status(201).json({
      message: 'Account created successfully',
      user: userResponse
    })

  } catch (error) {
    console.error('Signup error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// Sign In
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      })
    }

    // Find user
    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
      return res.status(401).json({
        error: 'Invalid email or password'
      })
    }

    // Return user data (excluding password)
    const { password: _, ...userResponse } = user

    res.json({
      message: 'Signed in successfully',
      user: userResponse
    })

  } catch (error) {
    console.error('Signin error:', error)
    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

// Sign Out
router.post('/signout', (req, res) => {
  // In a real app with sessions/JWT, you'd invalidate the session/token here
  res.json({
    message: 'Signed out successfully'
  })
})

// Get current user (placeholder - in a real app, this would verify JWT/session)
router.get('/me', (req, res) => {
  // This is a placeholder - in a real app, you'd get user from session/JWT
  res.json({
    message: 'Get current user endpoint - implement session/JWT verification here'
  })
})

export default router
