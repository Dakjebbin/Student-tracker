import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center md:px-16 '>
            <div >
              <Link href="/" className='flex items-center h-16'>
                <Image src="/logo.svg" width={100} height={100} alt='logo'/>
                <p className='font-semibold md:text-2xl text-lg'>JUST<span className='font-bold text-[#ac1929]'>+</span>HEALTH</p>
                </Link>
            </div>

            <div className='flex gap-4'>
               
                <button className='text-[#ac1929] font-semibold md:text-lg text-base'>
                <Link href="/login">Login
                </Link>
                </button>
               
                <button className='bg-[#ac1929] md:px-6 px-4 md:py-2 py-1 text-nowrap text-white font-semibold rounded-lg'>
                  <Link href="/register">Sign Up</Link></button>
            </div>
    </header>
  )
}

export default Header