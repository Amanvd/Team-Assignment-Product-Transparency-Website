import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-1 sm:gap-2 text-lg sm:text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition">
            <span className="text-2xl sm:text-3xl">🔍</span>
            <span className="hidden xs:inline">Product Transparency</span>
            <span className="xs:hidden">PT</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            <Link to="/submit" className="text-sm xl:text-base text-gray-700 hover:text-primary-600 font-medium transition whitespace-nowrap">
              Submit Product
            </Link>
            <Link to="/dashboard" className="text-sm xl:text-base text-gray-700 hover:text-primary-600 font-medium transition">
              Dashboard
            </Link>
            <button
              onClick={() => navigate('/login')}
              className="px-4 xl:px-5 py-2 text-sm xl:text-base text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 font-semibold transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-4 xl:px-5 py-2 text-sm xl:text-base bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="pb-4 space-y-3 border-t border-gray-200 pt-4">
            <Link 
              to="/submit" 
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 px-4 hover:bg-primary-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit Product
            </Link>
            <Link 
              to="/dashboard" 
              className="block text-gray-700 hover:text-primary-600 font-medium py-2 px-4 hover:bg-primary-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                navigate('/login')
                setMobileMenuOpen(false)
              }}
              className="w-full px-5 py-3 text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 font-semibold transition"
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate('/register')
                setMobileMenuOpen(false)
              }}
              className="w-full px-5 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
