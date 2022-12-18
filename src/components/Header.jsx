import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import DowloadCv from '../assets/DowloadCv/RobertCv.pdf'

const Header = () => {
  return (
    <div className='navbar bg-base-100  dark:bg-slate-900  dark:text-[#888888] text-pink-900 font-bold'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 '
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li tabIndex={0}>
              <a className='justify-between'>
                Contact
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </a>
              <ul className='p-2'>
                <li>
                  <a href='https://github.com/robertlca91' target={'_blank'}>
                    <img className='text-2xl' src='github.svg' alt='github' />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/feed/'>
                    {' '}
                    <i className='fa-brands fa-linkedin text-2xl text-white'></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>Robert</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-2xl'>
          <li>
            <a>HOMEPAGE</a>
          </li>
          <li>
            <a href=''> ABOUT ME</a>
            {/* <HashLink
              to='#about'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            >
              <a href=''> ABOUT ME</a>
            </HashLink> */}
          </li>
          <li>
            <a>SERVICE</a>
          </li>
          <li>
            <a>PORTFOLIO</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a href={DowloadCv} download className='btn'>
          Dowload Cv
        </a>
      </div>
    </div>
  )
}

export default Header
