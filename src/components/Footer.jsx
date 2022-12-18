import React from 'react'
import Pages from './Pages'

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200 rounded dark:bg-slate-900 dark:text-[#888888] text-pink-900 font-bold'>
      <div>
        <Pages />
      </div>
      <div className='grid grid-flow-col gap-4'>
        <a className='link link-hover text-xl'>About Me</a>
        <a className='link link-hover text-xl'>Service</a>
        <a className='link link-hover text-xl'>Portfolio</a>
        <a className='link link-hover text-xl'>Contact</a>
      </div>
      <div>
        <div className='grid grid-flow-col gap-4'>
          <a>
            <i className='fa-brands fa-github text-4xl'></i>
          </a>
          <a>
            <i className='fa-brands fa-linkedin text-4xl'></i>
          </a>
          <a>
            <i className='fa-brands fa-whatsapp text-4xl'></i>
          </a>
        </div>
      </div>
      <div>
        <p className='text-xl'>Robert © 2022 - Robert L. Centeno Avendaño</p>
      </div>
    </footer>
  )
}

export default Footer
