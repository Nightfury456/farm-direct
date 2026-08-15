import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Marketplace from './components/Marketplace'
import WeatherInfo from './components/WeatherInfo'
import Footer from './components/Footer'
import { AuthProvider, useAuth } from './components/AuthContext'
import AuthModal from './components/AuthModal'

function AppContent() {
  const { isAuthModalOpen, authMode, closeAuthModal } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <Marketplace />
        <WeatherInfo />
      </main>
      <Footer />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={closeAuthModal}
      />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
