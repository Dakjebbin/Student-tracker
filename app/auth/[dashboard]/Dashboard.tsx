"use client"
import React, { useState } from 'react'
import {
  SignedIn,
  UserButton,
} from '@clerk/nextjs'
import {
  HeartPulseIcon,
  ActivityIcon,
  ClipboardListIcon,
} from 'lucide-react'
import { HealthHistoryForm } from './components/HealthHistoryForm.tsx'
import { HealthFeedback } from './components/HealthFeedback.tsx'
import Image from 'next/image.js'
import Link from 'next/link.js'
export function Dashboard({clerk}) {
  const [healthData, setHealthData] = useState(null)
  const [showForm, setShowForm] = useState(true)
  const handleHealthDataSubmit = (data: any) => {
    setHealthData(data)
    setShowForm(false)
  }
 
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#ac192a1c] to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
           
            <Link href="/" className='flex items-center h-16'>
                <Image src="/logo.svg" width={100} height={100} alt='logo'/>
                <p className='font-semibold md:text-2xl text-lg'>JUST<span className='font-bold text-[#ac1929]'>+</span>HEALTH</p>
                </Link>
                <SignedIn>
            <button
             
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
             
              <UserButton />
            </button>
             </SignedIn>
          </div>
         
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome {clerk.firstName || ""} to Your Health Dashboard
          </h2>
          <p className="text-gray-600">
            Track your health information and receive personalized feedback
          </p>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <ActivityIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Health Records</p>
                <p className="text-2xl font-bold text-gray-900">
                  {healthData ? '1' : '0'}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <ClipboardListIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-2xl font-bold text-gray-900">
                  {healthData ? 'Complete' : 'Pending'}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <HeartPulseIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Feedback</p>
                <p className="text-2xl font-bold text-gray-900">
                  {healthData ? 'Available' : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {showForm ? (
              <HealthHistoryForm onSubmit={handleHealthDataSubmit} />
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Health Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Age:</span>
                    <span className="font-medium">{healthData?.age} years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{healthData?.weight} kg</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Height:</span>
                    <span className="font-medium">{healthData?.height} cm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Blood Type:</span>
                    <span className="font-medium">{healthData?.bloodType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Conditions:</span>
                    <span className="font-medium">
                      {healthData?.conditions || 'None'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update Information
                </button>
              </div>
            )}
          </div>
          <div>{healthData && <HealthFeedback healthData={healthData} />}</div>
        </div>
      </main>
    </div>
  )
}
