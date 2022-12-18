import React from 'react'

const Skills = () => {
  return (
    <div className='w-full  dark:bg-slate-900  dark:text-[#888888] text-pink-900 font-bold '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold text-gray-300 py-4  inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='html.png' alt='html' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='css.png' alt='html' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='javascript.png' alt='html' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='react.png' alt='html' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='node.png' alt='html' />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='tailwind.png' alt='html' />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='github.png' alt='html' />
            <p className='my-4'>GIT HUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
            <img className='w-20 mx-auto' src='aws.png' alt='html' />
            <p className='my-4'>AWS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
