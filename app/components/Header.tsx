import Image from 'next/image'
import Link from 'next/link'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center md:px-16 h-16">
      {/* Logo Section */}
      <div>
        <Link href="/" className="flex items-center h-16">
          <Image src="/logo.svg" width={100} height={100} alt="logo" />
          <p className="font-semibold md:text-2xl md:block hidden text-lg">
            JUST<span className="font-bold text-[#ac1929]">+</span>HEALTH
          </p>
        </Link>
      </div>
      <SignedIn>
  <Link href="/auth/dashboard">
    <p className='bg-[#ac1929] text-white px-3 py-2 rounded-xl cursor-pointer font-semibold'>
      My Dashboard
    </p>
  </Link>
</SignedIn>
      {/* Auth Section */}
      <div className="flex justify-end items-center gap-4">
        <SignedOut>
          <SignInButton mode="redirect" forceRedirectUrl="/auth/dashboard" fallbackRedirectUrl="/">
            <button className="text-[#ac1929] cursor-pointer font-semibold md:text-lg text-base">
              Login
            </button>
          </SignInButton>
   
          <SignUpButton>
            <button className="bg-[#ac1929] md:px-6 px-4 md:py-2 py-1 cursor-pointer text-nowrap text-white font-semibold rounded-lg">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
       
      </div>
    </header>
  )
}

export default Header
