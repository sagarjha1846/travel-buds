import React, { useState } from 'react';
import { Globe, Shield, MessageSquare, Heart, MapPin, Users, ArrowRight, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Welcome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useTheme();

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real-time Translation",
      description: "Break language barriers with your buddy who speaks your language"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Navigate safely with someone who knows the customs and potential risks"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hidden Gems",
      description: "Discover authentic experiences beyond typical tourist spots"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cultural Bridge",
      description: "Connect genuinely with locals through your trusted travel buddy"
    }
  ];

  return (
    <div style={{
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)'
    }} className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderBottomColor: 'var(--color-border)'
      }} className="fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-300 dark:bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: 'var(--color-accent-dark)' }} />
              <span className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-accent-dark)' }}>
                TravelMate
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#how-it-works" className="transition text-sm lg:text-base" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>How it Works</a>
              <a href="#features" className="transition text-sm lg:text-base" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>Features</a>
              <a href="#destinations" className="transition text-sm lg:text-base" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>Destinations</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full transition"
                style={{ backgroundColor: 'var(--color-divider)' }}
              >
                {isDark ? <Sun className="w-5 h-5" style={{ color: 'var(--color-accent-dark)' }} /> : <Moon className="w-5 h-5" style={{ color: 'var(--color-accent-dark)' }} />}
              </button>
              <button className="px-5 py-2 text-white rounded-full hover:shadow-lg transition text-sm lg:text-base" style={{ backgroundColor: 'var(--color-primary)' }}>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full transition"
                style={{ backgroundColor: 'var(--color-divider)' }}
              >
                {isDark ? <Sun className="w-5 h-5" style={{ color: 'var(--color-accent-dark)' }} /> : <Moon className="w-5 h-5" style={{ color: 'var(--color-accent-dark)' }} />}
              </button>
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: 'var(--color-text-secondary)' }} /> : <Menu className="w-6 h-6" style={{ color: 'var(--color-text-secondary)' }} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div style={{ borderTopColor: 'var(--color-border)' }} className="md:hidden pt-4 pb-3 space-y-3 border-t mt-3">
              <a href="#how-it-works" className="block py-2 transition" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>How it Works</a>
              <a href="#features" className="block py-2 transition" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>Features</a>
              <a href="#destinations" className="block py-2 transition" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--color-text-secondary)'}>Destinations</a>
              <button className="w-full px-6 py-2.5 text-white rounded-full font-medium" style={{ backgroundColor: 'var(--color-primary)' }}>
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}>
                Your Local Friend Abroad
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                Travel with a
                <span className="block" style={{ color: 'var(--color-accent-dark)' }}>
                  Trusted Local
                </span>
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Explore India with a personal travel buddy who speaks your language,
                keeps you safe, and helps you experience the real India—not just the tourist spots.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full font-medium hover:shadow-xl transition flex items-center justify-center gap-2 group" style={{ backgroundColor: 'var(--color-primary)' }}>
                  Find Your Travel Buddy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-full font-medium transition" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--color-accent-dark)'; (e.target as HTMLElement).style.color = 'var(--color-accent-dark)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--color-border)'; (e.target as HTMLElement).style.color = 'var(--color-text-primary)'; }}>
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20" style={{ backgroundColor: 'var(--color-primary)' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=1000&fit=crop"
                alt="Travelers exploring together"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[400px] sm:h-125 lg:h-150 object-cover"
              />

              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl max-w-[280px] sm:max-w-xs" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-light)' }}>
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" style={{ color: 'var(--color-accent-dark)' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base" style={{ color: 'var(--color-text-primary)' }}>Safe & Verified</div>
                    <div className="text-xs sm:text-sm" style={{ color: 'var(--color-text-tertiary)' }}>All travel buds background-checked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text-primary)' }}>
              More Than Just a Guide
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4" style={{ color: 'var(--color-text-secondary)' }}>
              Your travel buddy is your translator, protector, and cultural bridge all in one
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl transition duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--color-bg-primary)',
                  borderColor: 'var(--color-border)',
                  borderWidth: '1px'
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition" style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent-dark)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Simple. Personal. Safe.
            </h2>
            <p className="text-lg sm:text-xl px-4" style={{ color: 'var(--color-text-secondary)' }}>Get started in three easy steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Choose Your Destination", desc: "Tell us where you're going in India and what you want to experience" },
              { step: "02", title: "Match with a Local Buddy", desc: "We connect you with verified travel buds who match your needs" },
              { step: "03", title: "Travel with Confidence", desc: "Enjoy authentic experiences with your trusted local travel buddy" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl sm:text-8xl font-bold absolute -top-6 sm:-top-8 -left-2 sm:-left-4 -z-10" style={{ color: 'var(--color-accent-light)' }}>
                  {item.step}
                </div>
                <div className="relative pt-6 sm:pt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8" style={{ color: 'var(--color-accent-medium)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section id="destinations" className="py-12 sm:py-20 px-4 sm:px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Explore India with Local Buddies
            </h2>
            <p className="text-lg sm:text-xl px-4" style={{ color: 'var(--color-text-secondary)' }}>Travel buds available across incredible India</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { city: "Jaipur", state: "Rajasthan", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop" },
              { city: "Goa", state: "India", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop" },
              { city: "Varanasi", state: "Uttar Pradesh", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&h=400&fit=crop" },
              { city: "Kerala", state: "Backwaters", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop" },
              { city: "Udaipur", state: "Rajasthan", image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop" },
              { city: "Rishikesh", state: "Uttarakhand", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop" }
            ].map((dest, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{dest.city}</h3>
                  <div className="text-white/90 text-xs sm:text-sm">{dest.state}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4 opacity-90">
              Discover the real India with a trusted local buddy by your side
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition text-base sm:text-lg" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-accent-dark)' }}>
              Find Your Travel Buddy Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8 sm:py-12 px-4 sm:px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--color-accent-darker)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Globe className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: 'var(--color-accent-light)' }} />
            <span className="text-xl sm:text-2xl font-bold">TravelMate</span>
          </div>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base px-4 opacity-90">Your trusted companion for authentic travel experiences</p>
          <div className="text-xs sm:text-sm opacity-75">
            © 2026 TravelMate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}