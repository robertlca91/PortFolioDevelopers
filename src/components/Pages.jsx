import React, { useEffect, useState } from 'react'

const Pages = () => {
  const [likeClick, setLikeClick] = useState(false)
  const [like, setLike] = useState(
    JSON.parse(localStorage.getItem('like')) ?? 1500
  )

  const getLike = () => {
    setLike(like + 1)
    setLikeClick(true)
  }

  useEffect(() => {
    localStorage.setItem('like', JSON.stringify(like))
  }, [like])
  return (
    <div className=' stats shadow flex flex-col  text-white bg-transparent border-none'>
      <div
        className='group stat bg-pink-700 glass hover:bg-blue-700'
        onClick={getLike}
      >
        <div className='stat-figure '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className={`group-active:text-blue-500 inline-block w-8 h-8 stroke-current`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            ></path>
          </svg>
        </div>
        <div className='stat-title'>Total Likes</div>
        <div className='stat-value  bg-transparent'> {like} K</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>

      <div className='stat bg-pink-800 hover:bg-blue-800 glass'>
        <div className='stat-figure '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-8 h-8 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 10V3L4 14h7v7l9-11h-7z'
            ></path>
          </svg>
        </div>
        <div className='stat-title'>Page Views</div>
        <div className='stat-value  bg-transparent'>26M</div>
        <div className='stat-desc'>21% more than last month</div>
      </div>
    </div>
  )
}

export default Pages
