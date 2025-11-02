"use client"
import React, { useState } from 'react'
import { HeartPulseIcon, MailIcon, LockIcon } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Image from 'next/image'
export function Login() {
//   const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - in production, this would call an API
  
  }
  return (
    <>
    <Header/>
    <div className="min-h-screen w-full bg-linear-to-br from-[#ac192a1c]  to-green-50 flex items-center justify-center p-4">
       
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-[#ac1a120e] p-1 rounded-full mb-4">
            <Image src="/logo.svg" width={100} height={100} alt='logo'/>
            </div>
            <p className='font-bold md:text-2xl text-lg'>JUST<span className='font-bold text-[#ac1929]'>+</span>HEALTH</p>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ac1912] focus:border-transparent outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ac1912] focus:border-transparent outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#ac1912] border-gray-300 rounded focus:ring-[#ac1912]"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#ac1912] hover:text-[#ac1912]">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ac1912] text-white py-3 rounded-lg font-medium hover:bg-[#ac1912] transition-colors"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="text-[#ac1912] hover:text-[#ac1912] font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}