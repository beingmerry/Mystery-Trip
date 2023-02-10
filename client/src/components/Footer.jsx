import BenMerrymanProfilePic from '../assets/ProfilePic_1800x1800_2021_Conshy.jpg'
import React from 'react'

export default function Footer () {
  return (
    <footer className='p-4 bg-white shadow md:px-6 md:py-4 dark:bg-gray-900'>
      <div className='md:flex md:items-center md:justify-between'>
        <a
          href='https://www.linkedin.com/in/benmerryman/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center mb-4 sm:mb-0'
        >
          <img
            src={BenMerrymanProfilePic}
            className='h-14 mr-3 rounded-full hover:scale-150'
            alt='Ben Merryman'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Built by Ben Merryman
          </span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a
              href='https://github.com/beingmerry/Mystery-Trip-AWS-Amplify'
              className='mr-4 hover:underline md:mr-6 '
              target='_blank'
              rel='noopener noreferrer'
            >
              Project Repo
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              Tools and Skills Used
            </a>
          </li>
          <li>
            <a
              href='mailto:ben.merryman@gmail.com?subject=Looking for work?&body=We may have just the role for you!'
              className='hover:underline'
            >
              Ben.Merryman@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-2 flex-row border-gray-200 sm:mx-auto dark:border-gray-700' />
      <span className=' text-gray-500 sm:text-center dark:text-gray-400'>
        <div className='flex flex-wrap items-center justify-center'>
          <p>2023 - Made with Skills earned at {'   '}</p>
          <a
            href='https://flatironschool.com/'
            className='ml-2 text-slate-100 bg-blue-600 flex  hover:bg-blue-700 font-bold py-1 px-2 rounded'
            target='_blank'
            rel='noopener noreferrer'
          >
            🗻 Flatiron School
          </a>
        </div>
      </span>
    </footer>
  )
}
