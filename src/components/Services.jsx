import React from 'react'

const Services = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-[#888888] text-pink-900 font-bold'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-3 items-center'>
          <h2 className='text-white font-bold text-4xl'>Service</h2>
          <h3 className='text-3xl dark:text-white'>What do I offer?</h3>
          <p className='w-1/2 text-center text-gray-400'>
            My approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience.{' '}
          </p>
        </div>
        <div className='p-5 sm:p-0 flex flex-wrap justify-between'>
          <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <img src='icon.png' alt='icons' className='w-10' />
            <h2 className='font-medium text-lg dark:text-white'>
              UX/UI Design{' '}
            </h2>
            <p className='text-gray-400'>
              I specialize in creating interactive websites for individuals and
              small businesses.
            </p>
            <a className='text-indigo-600 font-semibold text-sm' href=''>
              Read More
            </a>
          </div>
          <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <img src='icon.png' alt='icons' className='w-10' />
            <h2 className='font-medium text-lg dark:text-white'>
              UX/UI Design{' '}
            </h2>
            <p className='text-gray-400'>
              I specialize in creating interactive websites for individuals and
              small businesses.
            </p>
            <a className='text-indigo-600 font-semibold text-sm' href=''>
              Read More
            </a>
          </div>
          <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <img src='icon.png' alt='icons' className='w-10' />
            <h2 className='font-medium text-lg dark:text-white'>
              UX/UI Design{' '}
            </h2>
            <p className='text-gray-400'>
              I specialize in creating interactive websites for individuals and
              small businesses.
            </p>
            <a className='text-indigo-600 font-semibold text-sm' href=''>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
