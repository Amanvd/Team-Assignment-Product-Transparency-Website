import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const onSubmit = (data: any) => {
    console.log('Register:', data)
    // TODO: Implement actual registration logic
    alert('Registration successful! Redirecting to login...')
    setTimeout(() => navigate('/login'), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 py-8 sm:py-12 px-3 sm:px-4">
      <div className="max-w-md w-full">
        <button
          onClick={() => navigate('/')}
          className="mb-4 sm:mb-6 px-3 sm:px-5 py-2 sm:py-3 bg-white text-gray-800 font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-primary-600 hover:text-primary-600 flex items-center gap-2 transition shadow-md text-sm sm:text-base"
        >
          <span className="text-lg sm:text-xl">←</span> <span>Back to Home</span>
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🚀</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-sm sm:text-base text-gray-600">Join us in building product transparency</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Company Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 sm:top-3 text-gray-400 text-base sm:text-lg">🏢</span>
                <input
                  {...register('companyName', { required: true })}
                  type="text"
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Your Company Name"
                />
              </div>
              {errors.companyName && <p className="text-red-500 text-xs sm:text-sm mt-1">Company name is required</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 sm:top-3 text-gray-400 text-base sm:text-lg">📧</span>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="you@company.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">Valid email is required</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 sm:top-3 text-gray-400 text-base sm:text-lg">🔒</span>
                <input
                  {...register('password', { required: true, minLength: 6 })}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 sm:top-3 text-gray-400 hover:text-gray-600 text-base sm:text-lg"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1">Password must be at least 6 characters</p>}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 sm:top-3 text-gray-400 text-base sm:text-lg">🔒</span>
                <input
                  {...register('confirmPassword', {
                    required: true,
                    validate: (val: string) => {
                      if (watch('password') != val) {
                        return "Passwords do not match"
                      }
                    },
                  })}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full pl-9 sm:pl-10 pr-10 sm:pr-12 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2 sm:top-3 text-gray-400 hover:text-gray-600 text-base sm:text-lg"
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword.message as string}</p>
              )}
            </div>

            <div className="flex items-start">
              <input 
                type="checkbox" 
                required
                className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500" 
              />
              <label className="ml-2 text-xs sm:text-sm text-gray-600">
                I agree to the <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Create Account
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:underline font-semibold">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              Need help? <a href="#" className="text-primary-600 hover:underline font-semibold">Contact Support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
