import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const text = ['Curious', 'Fun', 'Interesting', 'Entertained']

const Works = () => {
  const [iconsCounter, setIconsCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIconsCounter((value) => {
        if (value + 1 === text.length) {
          return 0
        }
        return value + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id='works'
      className='py-40 dark:bg-slate-900  dark:text-[#888888] text-pink-900 font-bold'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-3 items-center'>
          <h2 className=' font-bold text-4xl'>Portfolio</h2>
          <p className='text-3xl dark:text-white '>Works & Projects</p>
          <SwitchTransition>
            <CSSTransition
              classNames='fade'
              key={text[iconsCounter]}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
            >
              <span className='text-2xl'>{text[iconsCounter]}</span>
            </CSSTransition>
          </SwitchTransition>
          <p className='w-1/2 text-center text-gray-400'>
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by HTML, CSS, JAVASCRIPT, TAILWIND, VS Code and REACT,
            I turn your requirements into a well-designed websites{' '}
          </p>
        </div>
        <div className='p-5 sm:p-0 flex flex-wrap justify-between'>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='pokedex.png' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='ricky.png' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='gif.png' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='ecommerce.png' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='' alt='project' />
          </div>
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src='' alt='project' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
