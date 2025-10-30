import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center animate-fade-in">
          <div className="mb-4 sm:mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-bounce">📊</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Product Transparency Made Simple
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 sm:mb-4 max-w-4xl mx-auto font-medium leading-relaxed px-4">
            Welcome to the <span className="text-primary-600 font-bold">Product Transparency Platform</span> – your trusted solution for 
            collecting, analyzing, and sharing detailed product information.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            We use <span className="font-semibold text-primary-600">AI-powered intelligent questioning</span> to gather comprehensive product details, 
            generate <span className="font-semibold text-primary-600">transparency scores</span>, and create 
            professional <span className="font-semibold text-primary-600">PDF reports</span> that help consumers make informed, 
            ethical, and health-conscious decisions.
          </p>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-800 font-medium">
              <span className="text-xl sm:text-2xl">🎯</span> <strong>Our Mission:</strong> Build trust through transparency. 
              Empower companies to showcase their commitment to quality, ethics, and sustainability.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-2xl mx-auto">
            <button
              onClick={() => navigate('/submit')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg"
            >
              📝 Submit Product Info
            </button>
            <button
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg"
            >
              🚀 Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900 px-4">Why Choose Our Platform?</h2>
        <p className="text-center text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Discover the powerful features that make transparency simple and effective
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            title="AI-Powered Questions"
            description="Intelligent follow-up questions adapt to your product information using advanced NLP."
            icon="🤖"
          />
          <FeatureCard
            title="Transparency Reports"
            description="Generate comprehensive PDF reports that showcase your product's transparency score."
            icon="📊"
          />
          <FeatureCard
            title="Secure & Private"
            description="Your data is encrypted and secure. Company-specific authentication ensures privacy."
            icon="🔒"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900 px-4">How It Works</h2>
          <p className="text-center text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Four simple steps to showcase your product's transparency
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Step number="1" title="Register" description="Create your company account" />
            <Step number="2" title="Submit" description="Answer intelligent questions about your product" />
            <Step number="3" title="Review" description="Get your transparency score and insights" />
            <Step number="4" title="Share" description="Download and share your transparency report" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">Ready to Build Trust?</h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 font-medium px-4">
          Join companies committed to product transparency
        </p>
        <button
          onClick={() => navigate('/register')}
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg"
        >
          Start Your Journey
        </button>
      </section>
    </div>
  )
}

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">{description}</p>
    </div>
  )
}

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="text-center transform transition hover:scale-105">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4 shadow-lg">
        {number}
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700 font-medium px-2">{description}</p>
    </div>
  )
}

export default LandingPage
