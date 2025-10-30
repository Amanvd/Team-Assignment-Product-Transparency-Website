import { useParams, useNavigate } from 'react-router-dom'

const ReportView = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDownloadPDF = () => {
    alert('PDF download started! (Feature will be implemented with backend integration)')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Product Transparency Report',
        text: 'Check out this product transparency report!',
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-6 px-5 py-3 bg-white text-gray-800 font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-primary-600 hover:text-primary-600 flex items-center gap-2 transition shadow-md"
        >
          <span className="text-xl">←</span> <span>Back to Dashboard</span>
        </button>

      <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">📄</span>
              <h1 className="text-3xl font-bold">Product Transparency Report</h1>
            </div>
            <p className="text-gray-600">Report ID: <span className="font-mono font-semibold">#{id}</span></p>
            <p className="text-sm text-gray-500 mt-1">Generated on Oct 30, 2025</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleShare}
              className="px-5 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition flex items-center gap-2"
            >
              <span>🔗</span> Share
            </button>
            <button 
              onClick={handleDownloadPDF}
              className="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition shadow-md flex items-center gap-2"
            >
              <span>⬇️</span> Download PDF
            </button>
          </div>
        </div>

        {/* Transparency Score */}
        <div className="mb-8 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border-2 border-green-300 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
            <span className="text-3xl">⭐</span> Transparency Score
          </h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="text-7xl font-bold text-green-600">85</div>
              <div className="text-sm text-gray-700 font-semibold mt-1">out of 100</div>
            </div>
            <div className="flex-grow">
              <div className="w-full bg-gray-200 rounded-full h-8 shadow-inner">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-8 rounded-full flex items-center justify-end pr-4" style={{ width: '85%' }}>
                  <span className="text-white text-sm font-bold">85%</span>
                </div>
              </div>
              <p className="text-base text-gray-800 mt-3 font-semibold">✅ Excellent transparency level</p>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="mb-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 shadow-md">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
            <span className="text-3xl">📦</span> Product Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoItem label="Product Name" value="Organic Granola" icon="🥣" />
            <InfoItem label="Category" value="Food" icon="🏷️" />
            <InfoItem label="Brand" value="HealthyChoice" icon="🏢" />
            <InfoItem label="Submission Date" value="Oct 30, 2025" icon="📅" />
          </div>
        </section>

        {/* Score Breakdown */}
        <section className="mb-8 p-6 bg-purple-50 rounded-xl border-2 border-purple-200 shadow-md">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
            <span className="text-3xl">📊</span> Score Breakdown
          </h2>
          <div className="space-y-5">
            <ScoreBar label="Ingredient Disclosure" score={90} icon="🧪" />
            <ScoreBar label="Sourcing Information" score={85} icon="🌍" />
            <ScoreBar label="Certifications" score={80} icon="✅" />
            <ScoreBar label="Environmental Impact" score={85} icon="🌱" />
          </div>
        </section>

        {/* Recommendations */}
        <section className="p-6 bg-amber-50 rounded-xl border-2 border-amber-300 shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
            <span className="text-3xl">💡</span> Recommendations for Improvement
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-800">
              <span className="text-2xl text-amber-600">•</span>
              <span className="pt-1 font-medium">Consider adding more detailed supply chain information to improve sourcing transparency</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800">
              <span className="text-2xl text-amber-600">•</span>
              <span className="pt-1 font-medium">Include carbon footprint data for better environmental transparency</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800">
              <span className="text-2xl text-amber-600">•</span>
              <span className="pt-1 font-medium">Add third-party certification details to strengthen credibility</span>
            </li>
          </ul>
        </section>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4 justify-center">
          <button
            onClick={() => navigate('/submit')}
            className="px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 font-semibold transition"
          >
            Submit Another Product
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold transition"
          >
            View All Reports
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

const InfoItem = ({ label, value, icon }: { label: string; value: string; icon: string }) => {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="text-sm text-gray-600 font-semibold mb-1">{label}</p>
        <p className="font-bold text-xl text-gray-900">{value}</p>
      </div>
    </div>
  )
}

const ScoreBar = ({ label, score, icon }: { label: string; score: number; icon: string }) => {
  const getColor = (score: number) => {
    if (score >= 85) return 'bg-gradient-to-r from-green-500 to-emerald-600'
    if (score >= 70) return 'bg-gradient-to-r from-yellow-500 to-orange-500'
    return 'bg-gradient-to-r from-red-500 to-rose-600'
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border-2 border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-bold flex items-center gap-2 text-gray-900">
          <span className="text-2xl">{icon}</span> {label}
        </span>
        <span className="text-lg font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded">{score}/100</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
        <div
          className={`${getColor(score)} h-4 rounded-full transition-all duration-500`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

export default ReportView
