import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface Question {
  id: string
  text: string
  type: 'text' | 'textarea' | 'select' | 'multi-select'
  options?: string[]
  required: boolean
}

const ProductForm = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<any>({})
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const initialQuestions: Question[] = [
    { id: 'product_name', text: 'What is your product name?', type: 'text', required: true },
    { id: 'category', text: 'Product Category', type: 'select', required: true, options: ['Food & Snacks', 'Beverages', 'Cosmetics & Beauty', 'Health Supplements', 'Personal Care', 'Cleaning Products', 'Baby Products', 'Pet Food', 'Other'] },
    { id: 'brand_name', text: 'Brand Name', type: 'text', required: true },
    { id: 'manufacturer', text: 'Manufacturer/Company Name', type: 'text', required: true },
    { id: 'description', text: 'Detailed Product Description', type: 'textarea', required: true },
    { id: 'target_audience', text: 'Target Audience', type: 'select', required: true, options: ['Children', 'Adults', 'Seniors', 'Athletes', 'Everyone', 'Pregnant Women', 'Specific Health Conditions'] },
  ]

  const ingredientQuestions: Question[] = [
    { id: 'ingredients', text: 'Complete List of Ingredients (in order of quantity)', type: 'textarea', required: true },
    { id: 'allergens', text: 'Allergen Information (nuts, dairy, gluten, soy, etc.)', type: 'textarea', required: true },
    { id: 'nutritional_info', text: 'Nutritional Information per serving', type: 'textarea', required: true },
    { id: 'additives', text: 'Preservatives, Artificial Colors, or Flavors', type: 'textarea', required: false },
    { id: 'gmo_status', text: 'GMO Status', type: 'select', required: true, options: ['Non-GMO', 'Contains GMO', 'Not Tested', 'GMO-Free Certified'] },
    { id: 'organic_status', text: 'Organic Certification', type: 'select', required: false, options: ['100% Organic', 'Organic', 'Made with Organic', 'Not Organic', 'In Process'] },
  ]

  const sourcingQuestions: Question[] = [
    { id: 'sourcing', text: 'Where are your ingredients sourced from? (Countries/Regions)', type: 'textarea', required: true },
    { id: 'supplier_ethics', text: 'Supplier Ethics & Labor Practices', type: 'textarea', required: true },
    { id: 'certifications', text: 'Certifications (Organic, Fair Trade, Cruelty-Free, etc.)', type: 'textarea', required: false },
    { id: 'sustainability', text: 'Environmental & Sustainability Practices', type: 'textarea', required: true },
    { id: 'packaging', text: 'Packaging Materials & Recyclability', type: 'textarea', required: true },
    { id: 'carbon_footprint', text: 'Carbon Footprint Information', type: 'textarea', required: false },
    { id: 'animal_testing', text: 'Animal Testing Policy', type: 'select', required: false, options: ['Never Tested', 'Cruelty-Free Certified', 'Required by Law', 'Not Applicable'] },
  ]

  const onSubmit = async (data: any) => {
    const updatedFormData = { ...formData, ...data }
    setFormData(updatedFormData)

    if (step < 4) {
      nextStep()
      reset()
    } else {
      // Final submission
      console.log('Final form data:', updatedFormData)
      alert('Product submitted successfully! Redirecting to dashboard...')
      setTimeout(() => navigate('/dashboard'), 1500)
    }
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }
  
  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const renderQuestions = (questions: Question[]) => {
    return questions.map((question) => (
      <div key={question.id}>
        <label className="block text-sm sm:text-base font-bold text-gray-900 mb-2">
          {question.text} {question.required && <span className="text-red-600 text-base sm:text-lg">*</span>}
        </label>
        {question.type === 'text' && (
          <input
            {...register(question.id, { required: question.required })}
            type="text"
            defaultValue={formData[question.id] || ''}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
            placeholder={`Enter ${question.text.toLowerCase()}`}
          />
        )}
        {question.type === 'textarea' && (
          <textarea
            {...register(question.id, { required: question.required })}
            rows={4}
            defaultValue={formData[question.id] || ''}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
            placeholder={`Enter ${question.text.toLowerCase()}`}
          />
        )}
        {question.type === 'select' && (
          <select
            {...register(question.id, { required: question.required })}
            defaultValue={formData[question.id] || ''}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm sm:text-base"
          >
            <option value="">Select...</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {errors[question.id] && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">This field is required</p>
        )}
      </div>
    ))
  }

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 sm:mb-6 px-3 sm:px-5 py-2 sm:py-3 bg-white text-gray-800 font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-primary-600 hover:text-primary-600 flex items-center gap-2 transition shadow-md text-sm sm:text-base"
      >
        <span className="text-lg sm:text-xl">←</span> <span>Back</span>
      </button>

      <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="text-3xl sm:text-4xl">📝</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Information Submission</h1>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Step {step} of 4</span>
            <span className="text-xs sm:text-sm text-gray-600">{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-600 to-primary-700 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900">
                <span className="text-2xl sm:text-3xl">📋</span> Basic Information
              </h2>
              {renderQuestions(initialQuestions)}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900">
                <span className="text-2xl sm:text-3xl">🧪</span> Ingredients & Composition
              </h2>
              {renderQuestions(ingredientQuestions)}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900">
                <span className="text-2xl sm:text-3xl">🌍</span> Sourcing & Ethics
              </h2>
              {renderQuestions(sourcingQuestions)}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900">
                <span className="text-2xl sm:text-3xl">✅</span> Review & Submit
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">Review Your Information</h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-200 pb-2">
                      <span className="font-medium text-gray-700 capitalize">{key.replace(/_/g, ' ')}:</span>
                      <p className="text-gray-600 mt-1">{value as string}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                <p className="text-blue-800 text-xs sm:text-sm">
                  <strong>Note:</strong> By submitting this form, you confirm that all information provided is accurate and complete.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 gap-2 sm:gap-0">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white border-2 border-gray-700 rounded-lg hover:bg-gray-800 font-bold transition shadow-md hover:shadow-lg flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">←</span> <span>Previous</span>
              </button>
            )}
            {step < 4 ? (
              <button
                type="submit"
                className="ml-auto px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-bold transition shadow-md hover:shadow-lg flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
              >
                <span>Next</span> <span className="text-lg sm:text-xl">→</span>
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 sm:px-8 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold transition shadow-md hover:shadow-lg flex items-center gap-1 sm:gap-2 text-base sm:text-lg"
              >
                <span>✓</span> Submit Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
