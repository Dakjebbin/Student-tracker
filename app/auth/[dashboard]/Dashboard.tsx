<<<<<<< HEAD
<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
=======
"use client"
import React, { useState } from 'react'
import {
  SignedIn,
  UserButton,
} from '@clerk/nextjs'
>>>>>>> 398b559 (done)
=======
"use client";
import React, { useState } from "react";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
>>>>>>> 4110823 (dne)
import {
  HeartPulseIcon,
  ActivityIcon,
  ClipboardListIcon,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4110823 (dne)
} from "lucide-react";
import { HealthHistoryForm } from "./components/HealthHistoryForm";
import { HealthFeedback } from "./components/HealthFeedback";
import Image from "next/image";
import Link from "next/link";

export function Dashboard({ clerk }: any) {
  const [healthData, setHealthData] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(true);

<<<<<<< HEAD
  const handleHealthDataSubmit = (data: any) => {
    setHealthData(data);
    setShowForm(false);
  };

=======
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
 
>>>>>>> 398b559 (done)
=======
  const handleHealthDataSubmit = (data: any) => {
    setHealthData(data);
    setShowForm(false);
  };

>>>>>>> 4110823 (dne)
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#ac192a1c] to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4110823 (dne)
            <Link href="/" className="flex items-center h-16">
              <Image src="/logo.svg" width={100} height={100} alt="logo" />
              <p className="font-semibold md:text-2xl text-lg">
                JUST<span className="font-bold text-[#ac1929]">+</span>HEALTH
              </p>
            </Link>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
<<<<<<< HEAD
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome {clerk?.firstName || ""} to Your Health Dashboard
=======
           
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
=======
>>>>>>> 4110823 (dne)
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
<<<<<<< HEAD
            Welcome {clerk.firstName || ""} to Your Health Dashboard
>>>>>>> 398b559 (done)
=======
            Welcome {clerk?.firstName || ""} to Your Health Dashboard
>>>>>>> 4110823 (dne)
          </h2>
          <p className="text-gray-600">
            Track your health information and receive personalized feedback
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<ActivityIcon className="w-6 h-6 text-blue-600" />}
            title="Health Records"
            value={healthData ? "1" : "0"}
            color="bg-blue-100"
          />
          <StatCard
            icon={<ClipboardListIcon className="w-6 h-6 text-green-600" />}
            title="Status"
            value={healthData ? "Complete" : "Pending"}
            color="bg-green-100"
          />
          <StatCard
            icon={<HeartPulseIcon className="w-6 h-6 text-purple-600" />}
            title="Feedback"
            value={healthData ? "Available" : "N/A"}
            color="bg-purple-100"
          />
        </div>

        {/* Main Section */}
=======
=======

>>>>>>> 4110823 (dne)
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<ActivityIcon className="w-6 h-6 text-blue-600" />}
            title="Health Records"
            value={healthData ? "1" : "0"}
            color="bg-blue-100"
          />
          <StatCard
            icon={<ClipboardListIcon className="w-6 h-6 text-green-600" />}
            title="Status"
            value={healthData ? "Complete" : "Pending"}
            color="bg-green-100"
          />
          <StatCard
            icon={<HeartPulseIcon className="w-6 h-6 text-purple-600" />}
            title="Feedback"
            value={healthData ? "Available" : "N/A"}
            color="bg-purple-100"
          />
        </div>
<<<<<<< HEAD
        {/* Main Content Area */}
>>>>>>> 398b559 (done)
=======

        {/* Main Section */}
>>>>>>> 4110823 (dne)
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {showForm ? (
              <HealthHistoryForm onSubmit={handleHealthDataSubmit} />
            ) : (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4110823 (dne)
              <UserHealthCard
                healthData={healthData}
                onEdit={() => setShowForm(true)}
              />
<<<<<<< HEAD
            )}
          </div>

=======
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
>>>>>>> 398b559 (done)
=======
            )}
          </div>

>>>>>>> 4110823 (dne)
          <div>{healthData && <HealthFeedback healthData={healthData} />}</div>
        </div>
      </main>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}

// Reusable small components
const StatCard = ({ icon, title, value, color }: any) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center gap-4">
      <div className={`${color} p-3 rounded-lg`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const UserHealthCard = ({ healthData, onEdit }: any) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">
      Your Health Information
    </h3>
    <div className="space-y-3">
  {Object.entries(healthData)
    .filter(([key]) => key !== "createdAt" && key !== "updatedAt" && key !== "_id" && key !== "__v" && key !== "userId")
    .map(([key, value]) => (
      <div key={key} className="flex justify-between py-2 border-b">
        <span className="text-gray-600 capitalize">
          {key.replace(/([A-Z])/g, " $1")}:
        </span>
        <span className="font-medium">{String(value)}</span>
      </div>
    ))}
</div>


    

    <button
      onClick={onEdit}
      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Update Information
    </button>
  </div>
);
=======
  )
}
>>>>>>> 398b559 (done)
=======
  );
}

// Reusable small components
const StatCard = ({ icon, title, value, color }: any) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center gap-4">
      <div className={`${color} p-3 rounded-lg`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const UserHealthCard = ({ healthData, onEdit }: any) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-4">
      Your Health Information
    </h3>
    <div className="space-y-3">
  {Object.entries(healthData)
    .filter(([key]) => key !== "createdAt" && key !== "updatedAt" && key !== "_id" && key !== "__v" && key !== "userId")
    .map(([key, value]) => (
      <div key={key} className="flex justify-between py-2 border-b">
        <span className="text-gray-600 capitalize">
          {key.replace(/([A-Z])/g, " $1")}:
        </span>
        <span className="font-medium">{String(value)}</span>
      </div>
    ))}
</div>


    

    <button
      onClick={onEdit}
      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Update Information
    </button>
  </div>
);
>>>>>>> 4110823 (dne)
