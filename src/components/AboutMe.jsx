import React from 'react'

const AboutMe = () => {
  return (
    <div
      id='about'
      className='px-10 dark:bg-slate-900  dark:text-[#888888] text-pink-900 font-bold'
    >
      <div className='container mx-auto py-10 flex flex-col-reverse lg:flex-row items-center gap-20 '>
        <div className='relative h-full rounded-full overflow-hidden'>
          {/* <img className='min-h-max-10' src='robot1.png' alt='foto' /> */}
        </div>
        <div className='my-auto flex flex-col gap-3'>
          <h2 className='dark:text-white font-bold text-4xl'>About Me</h2>

          <h3 className='text-3xl font-medium dark:text-white'>
            Better Design
          </h3>
          <h3 className='text-3xl font-medium dark:text-white'>
            Better Experience
          </h3>

          <p className='text-gray-400 text-2xl'>
            My name is Roberto, I've been a web developer for two years. In
            order to kick-start my knowledge, I'm looking for a web developer
            job, as that's what I've been doing during this time in my spare
            time. Design websites for friends, develop simple e-stores with the
            help of some open source content management systems, etc. On top of
            that, I'm a normal guy who enjoys hiking, I like music and spending
            time with friends, while not working or studying, which takes up
            most of my time, of course. If I had to choose the best website I've
            designed so far, it would be this:.............. I am ambitious and
            hardworking and I believe you will give me the opportunity to prove
            my words.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
