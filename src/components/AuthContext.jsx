import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState('signin') // 'signin' or 'signup'

  const signIn = (userData) => {
    setUser(userData)
    setIsAuthModalOpen(false)
  }

  const signUp = (userData) => {
    setUser(userData)
    setIsAuthModalOpen(false)
  }

  const signOut = () => {
    setUser(null)
  }

  const openAuthModal = (mode = 'signin') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  const switchAuthMode = (mode) => {
    setAuthMode(mode)
  }

  const value = {
    user,
    isAuthModalOpen,
    authMode,
    signIn,
    signUp,
    signOut,
    openAuthModal,
    closeAuthModal,
    switchAuthMode
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
