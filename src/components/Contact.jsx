import React from 'react'

const Contact = () => {
  return (
    <div className='dark:bg-slate-900 dark:text-[#888888] text-pink-900 font-bold'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='text-white text-4xl'>Contact</h1>
          <h2 className='text-2xl text-white'>Have a Question?</h2>
          <p className='text-xl'>
            Do you have an idea? let's discuss it and see what we cand o
            together
          </p>
        </div>
        <form
          action=''
          className='flex flex-col items-center justify-center gap-4'
        >
          <input
            type='text'
            placeholder='Name surname'
            className='input input-bordered input-error p-2 w-full md:w-1/2 right-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white '
          />
          <input
            type='email'
            placeholder='Email'
            className='input input-bordered input-error p-2 w-full md:w-1/2 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white '
          />
          <textarea
            className='textarea textarea-error w-full md:w-1/2 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white'
            placeholder='Bio'
          ></textarea>
          <button className='btn btn-outline btn-secondary w-1/2'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
