import React from 'react'
import {
  CheckCircleIcon,
  AlertCircleIcon,
  InfoIcon,
  TrendingUpIcon,
} from 'lucide-react'
interface HealthFeedbackProps {
  healthData: any
}
export function HealthFeedback({ healthData }: HealthFeedbackProps) {
  // Calculate BMI
  const heightInMeters = healthData.height / 100
  const bmi = (healthData.weight / (heightInMeters * heightInMeters)).toFixed(1)
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5)
      return {
        category: 'Underweight',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
      }
    if (bmi < 25)
      return {
        category: 'Normal',
        color: 'text-green-600',
        bg: 'bg-green-50',
      }
    if (bmi < 30)
      return {
        category: 'Overweight',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
      }
    return {
      category: 'Obese',
      color: 'text-red-600',
      bg: 'bg-red-50',
    }
  }
  const bmiStatus = getBMICategory(parseFloat(bmi))
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Health Feedback</h3>
      {/* BMI Card */}
      <div className={`${bmiStatus.bg} rounded-lg p-4 mb-4`}>
        <div className="flex items-start gap-3">
          <TrendingUpIcon className={`w-6 h-6 ${bmiStatus.color} mt-1`} />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Body Mass Index (BMI)
            </h4>
            <p className="text-2xl font-bold text-gray-900 mb-1">{bmi}</p>
            <p className={`text-sm font-medium ${bmiStatus.color}`}>
              {bmiStatus.category}
            </p>
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <div className="space-y-4">
        <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
          <div className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h5 className="font-semibold text-gray-900 mb-1">
                Blood Type Recorded
              </h5>
              <p className="text-sm text-gray-700">
                Your blood type {healthData.bloodType} has been recorded. This
                is important for emergency situations.
              </p>
            </div>
          </div>
        </div>
        {healthData.conditions && (
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
            <div className="flex items-start gap-3">
              <InfoIcon className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">
                  Medical Conditions
                </h5>
                <p className="text-sm text-gray-700">
                  We have recorded your medical conditions. Make sure to keep
                  this information updated and consult with your healthcare
                  provider regularly.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
          <div className="flex items-start gap-3">
            <AlertCircleIcon className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <h5 className="font-semibold text-gray-900 mb-1">
                General Recommendations
              </h5>
              <ul className="text-sm text-gray-700 space-y-1 mt-2">
                <li>
                  • Maintain a balanced diet with plenty of fruits and
                  vegetables
                </li>
                <li>• Exercise regularly (at least 150 minutes per week)</li>
                <li>• Stay hydrated by drinking 8 glasses of water daily</li>
                <li>• Get 7-9 hours of quality sleep each night</li>
                <li>
                  • Schedule regular check-ups with your healthcare provider
                </li>
              </ul>
            </div>
          </div>
        </div>
        {parseFloat(bmi) > 25 && (
          <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
            <div className="flex items-start gap-3">
              <AlertCircleIcon className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">BMI Alert</h5>
                <p className="text-sm text-gray-700">
                  Your BMI indicates you may be above the healthy weight range.
                  Consider consulting with a healthcare professional about a
                  personalized weight management plan.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 text-center">
          This feedback is for informational purposes only and does not replace
          professional medical advice. Always consult with healthcare
          professionals for medical decisions.
        </p>
      </div>
    </div>
  )
}

