import React, { useState } from 'react'
import Clock from './Clock'
import ThemeDark from './ThemeDark'
const Hero = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <div className='hero min-h-screen bg-qhite dark:bg-slate-900 dark:text-[#888888] text-pink-900 font-bold'>
      <div className='hero-content text-center  lg:w-full'>
        <div></div>

        <div className='absolute m-0 top-20 left-4'>
          {' '}
          <ThemeDark />
          <Clock />
          <audio src='avicii.mp3' controls={playing} />
          <button onClick={() => setPlaying(!playing)}>
            {playing ? 'pause' : 'reproducir'}
          </button>
        </div>
        <div className='max-w-md lg:w-full'>
          <div className=''>
            <h1 className='text-5xl font-bold '>Peruvian Developer</h1>
            {/* <div className='icons  mt-20 h-[500px] w-[1280px] left-36 right-0 absolute '>
              <div className='border-2 w-[300px] shadow-lg shadow-pink-500/50  absolute left-16 top-16 flex'>
                <div>
                  <img
                    src={'glassesimoji.png'}
                    alt='glass'
                    width={'100px'}
                    height={'100px'}
                  />
                </div>
                <div className='items-center justify-center'>
                  <span className='text-center text-pink-600'>
                    Being creative is part of my essence
                  </span>
                </div>
              </div>
              <div className='border-2 w-[300px] shadow-lg shadow-pink-500/50  absolute bottom-20 left-14 flex'>
                <div>
                  <img
                    src={'corazon.png'}
                    alt='corazon'
                    width={'100px'}
                    height={'100px'}
                  />
                </div>
                <div>
                  {' '}
                  <span className='text-pink-600 '>
                    Being responsible and honest are part of my virtues
                  </span>
                </div>
              </div>
              <div className='border-2 w-[300px]   absolute right-10 top-[150px] flex shadow-lg shadow-pink-500/50'>
                <div>
                  <img
                    src={'angelito.png'}
                    alt='glass'
                    width={'100px'}
                    height={'100px'}
                  />
                </div>
                <div>
                  <span className='text-pink-600'>Web Development</span>
                </div>
              </div>
            </div> */}
            <img src='robert.png' alt='developers' />
          </div>

          <h2 className='text-4xl font-bold pt-2 '>Hello there</h2>

          <p className='py-6 '>Welcome to my developer portfolio</p>
          <button
            className='hover:text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600
          font-bold '
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              {' '}
              <i className='fa-solid fa-arrow-right pl-2'></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
