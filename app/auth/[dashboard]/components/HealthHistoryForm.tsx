"use client"
import React, { useState } from 'react'
import {
  UserIcon,
  ScaleIcon,
  RulerIcon,
  DropletIcon,
  FileTextIcon,
} from 'lucide-react'
<<<<<<< HEAD
import axios from 'axios'
import toast from 'react-hot-toast'
=======
>>>>>>> 398b559 (done)
interface HealthHistoryFormProps {
  onSubmit: (data: any) => void
}
export function HealthHistoryForm({ onSubmit }: HealthHistoryFormProps) {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
<<<<<<< HEAD
    bloodType: '',
    sleepHours: "",
    waterLitres: ""
  })
  const [loading, setLoading] = useState(false)

  const baseUrl:string = process.env.NEXT_PUBLIC_API_URL || "/api"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) {
      return toast.error("Please fill all fields")
    }
    
    setLoading(true)
    try {
      const response = await axios.post(`${baseUrl}/api/health`,{
        ...formData
      },{
        withCredentials:true
      })
    
      

      if (response.status === 200) {
        toast.success("Succesfully Updated")
        onSubmit(response.data.data);
        setFormData({
          age: "",
          weight: "",
          height: "",
          bloodType: "",
          sleepHours: "",
          waterLitres: ""
        });
      }else{
        toast.error("Something went wrong")
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        toast.error(
           error?.response?.data?.message
         );
       } else {
         toast.error(`reg error => , ${error}`);
       }
    }finally{
      setLoading(false)
    }
=======
    bloodType: 'A+',
    conditions: '',
    medications: '',
    allergies: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
>>>>>>> 398b559 (done)
  }
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Health History Form
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter your age"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <div className="relative">
              <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Weight"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <div className="relative">
              <RulerIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Height"
                required
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sleep Hours 
                          </label>
            <div className="relative">
              <ScaleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="sleepHours"
                value={formData.sleepHours}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Sleep Hours"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Water Litres 
            </label>
            <div className="relative">
              <RulerIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                name="waterLitres"
                value={formData.waterLitres}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Water Litres"
                required
              />
            </div>
          </div>
        </div>
=======
>>>>>>> 398b559 (done)
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blood Type
          </label>
          <div className="relative">
            <DropletIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
<<<<<<< HEAD
              <option value="">Please Select One</option>
=======
>>>>>>> 398b559 (done)
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>
<<<<<<< HEAD
        
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
         {loading ? "Loading ..." : "Submit Health Information"}
=======
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medical Conditions
          </label>
          <div className="relative">
            <FileTextIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              name="conditions"
              value={formData.conditions}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="List any medical conditions"
              rows={3}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Medications
          </label>
          <textarea
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            placeholder="List any current medications"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Allergies
          </label>
          <textarea
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            placeholder="List any allergies"
            rows={2}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Submit Health Information
>>>>>>> 398b559 (done)
        </button>
      </form>
    </div>
  )
}