import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const mockProducts = [
    { id: 1, name: 'Organic Granola', category: 'Food', date: 'Oct 30, 2025', score: 85, status: 'Approved' },
    { id: 2, name: 'Green Tea Extract', category: 'Beverage', date: 'Oct 28, 2025', score: 92, status: 'Approved' },
    { id: 3, name: 'Natural Face Cream', category: 'Cosmetics', date: 'Oct 25, 2025', score: 78, status: 'Pending' },
    { id: 4, name: 'Vitamin D Supplement', category: 'Supplement', date: 'Oct 22, 2025', score: 88, status: 'Approved' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 sm:mb-8">
        <div className="w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3 text-white bg-gradient-to-r from-primary-600 to-primary-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
            <span className="text-3xl sm:text-4xl md:text-5xl">📊</span> <span className="break-words">Dashboard</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-800 font-semibold mt-2 px-2">Track your product submissions and transparency scores</p>
        </div>
        <button
          onClick={() => navigate('/submit')}
          className="w-full lg:w-auto px-4 sm:px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <span className="text-lg sm:text-xl">➕</span> New Submission
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <StatCard title="Total Submissions" value="24" change="+12%" icon="📝" />
        <StatCard title="Avg. Transparency Score" value="82" change="+5%" icon="⭐" />
        <StatCard title="Reports Generated" value="18" change="+8%" icon="📄" />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-900">
            <span className="text-2xl sm:text-3xl">📋</span> <span>Recent Submissions</span>
          </h2>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-3 sm:px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-primary-600 text-xs sm:text-sm font-semibold text-gray-700 transition">
              🔍 Filter
            </button>
            <button className="flex-1 md:flex-none px-3 sm:px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-primary-600 text-xs sm:text-sm font-semibold text-gray-700 transition">
              📥 Export
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-4 font-bold text-gray-800">#</th>
                <th className="text-left py-4 px-4 font-bold text-gray-800">Product</th>
                <th className="text-left py-4 px-4 font-bold text-gray-800">Category</th>
                <th className="text-left py-4 px-4 font-bold text-gray-800">Date</th>
                <th className="text-left py-4 px-4 font-bold text-gray-800">Score</th>
                <th className="text-left py-4 px-4 font-bold text-gray-800">Status</th>
                <th className="text-left py-4 px-4 font-bold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-blue-50 transition">
                  <td className="py-4 px-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-900">{product.name}</td>
                  <td className="py-4 px-4 text-gray-700">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700 font-medium">{product.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.score >= 85 ? 'bg-green-100 text-green-800' :
                      product.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {product.score}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'Approved' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => navigate(`/report/${product.id}`)}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition shadow-md hover:shadow-lg"
                    >
                      View Report →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {mockProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-600 mb-4">No submissions yet</p>
            <button
              onClick={() => navigate('/submit')}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              Create Your First Submission
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const StatCard = ({ title, value, change, icon }: { title: string; value: string; change: string; icon: string }) => {
  const isPositive = change.startsWith('+')
  
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <h3 className="text-gray-600 text-xs sm:text-sm font-medium">{title}</h3>
        <span className="text-2xl sm:text-3xl">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl sm:text-4xl font-bold text-gray-900">{value}</p>
        <span className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded ${
          isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        }`}>
          {change}
        </span>
      </div>
    </div>
  )
}

export default Dashboard
