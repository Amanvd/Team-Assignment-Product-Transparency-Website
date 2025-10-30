import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl">🔍</span>
              <h3 className="text-xl sm:text-2xl font-bold">Product Transparency</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 max-w-md">
              Empowering ethical, health-first decision-making through transparent product information and intelligent AI-powered analysis.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-xl sm:text-2xl hover:text-primary-400 transition">🐦</a>
              <a href="#" className="text-xl sm:text-2xl hover:text-primary-400 transition">💼</a>
              <a href="#" className="text-xl sm:text-2xl hover:text-primary-400 transition">📧</a>
              <a href="#" className="text-xl sm:text-2xl hover:text-primary-400 transition">🌐</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <span>🔗</span> Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <Link to="/submit" className="hover:text-white transition hover:pl-2 inline-block">
                  Submit Product
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition hover:pl-2 inline-block">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition hover:pl-2 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition hover:pl-2 inline-block">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
              <span>👥</span> Contact
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-2">
              <strong>Team Altibbe | Hedamo</strong>
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-2">
              📧 info@producttransparency.com
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-2">
              📍 Building trust worldwide
            </p>
            <p className="text-primary-400 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">
              Built with ❤️ for transparency
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            &copy; {currentYear} Product Transparency Platform. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-white transition whitespace-nowrap">Privacy Policy</a>
            <a href="#" className="hover:text-white transition whitespace-nowrap">Terms of Service</a>
            <a href="#" className="hover:text-white transition whitespace-nowrap">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
