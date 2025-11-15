import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[#ac192a1c] pb-20'>
      <div className='flex items-center md:w-[70%] w-[95%] m-auto justify-center flex-col pt-26'>
        <p className='text-[47px] leading-14 mb-4 text-center font-bold'>
          <span className='text-[#2c2c2c]'>Track Your Health,</span>
          <span className='text-[#ac1912]'> Achieve Your Goals </span>
        </p>
        <p className='text-xl text-center'>
          Comprehensive healthcare tracking platform designed for students.
          Monitor your wellness, get personalized solutions, and visualize your progress.
        </p>
        <button className="bg-[#ac1912] my-10 px-7 py-3 rounded-lg cursor-pointer text-white text-lg font-semibold">
          Get Started Free
        </button>
      </div>

      <div className='mt-6 flex md:gap-8 gap-3 flex-wrap w-[97%] m-auto'>
        {/* Card 1 */}
        <div className='bg-white grow basis-[200px] shadow-lg shadow-[#3a3a3a] rounded-lg md:px-7 px-5 py-6'>
          <div className='bg-[#ac1a123d] flex w-fit px-2 py-2 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-heart-pulse w-6 h-6 text-[#ac1912]">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 
                0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 
                5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 
                1.5 3.5h5.27"></path>
            </svg>
          </div>
          <div className='mt-4'>
            <p className='font-semibold text-lg mb-2'>Health Monitoring</p>
            <p>Track vital health metrics including heart rate, sleep, and physical activity.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-white grow basis-[200px] shadow-lg shadow-[#3a3a3a] rounded-lg md:px-7 px-5 py-6'>
          <div className='bg-orange-200 flex w-fit px-2 py-2 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-shield-check w-6 h-6 text-orange-600">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 
                0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 
                0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 
                1.17 0 0 1 1.52 0C14.51 3.81 17 5 
                19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <div className='mt-4'>
            <p className='font-semibold text-lg mb-2'>Smart Solutions</p>
            <p>Get personalized health recommendations and solutions tailored to your needs.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='bg-white grow basis-[200px] shadow-lg shadow-[#3a3a3a] rounded-lg md:px-7 px-5 py-6'>
          <div className='bg-purple-200 flex w-fit px-2 py-2 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-trending-up w-6 h-6 text-purple-600">
              <path d="M16 7h6v6"></path>
              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
            </svg>
          </div>
          <div className='mt-4'>
            <p className='font-semibold text-lg mb-2'>Progress Analytics</p>
            <p>Visualize your health journey with detailed charts and progress reports.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className='bg-white grow basis-[200px] shadow-lg shadow-[#3a3a3a] rounded-lg md:px-7 px-5 py-6'>
          <div className='bg-green-200 flex w-fit px-2 py-2 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-activity w-6 h-6 text-green-600">
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 
                8.36a.25.25 0 0 1-.48 0L9.24 
                2.18a.25.25 0 0 0-.48 0l-2.35 
                8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
          </div>
          <div className='mt-4'>
            <p className='font-semibold text-lg mb-2'>Activity Tracking</p>
            <p>Monitor daily activities, exercise routines, and maintain an active lifestyle.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
