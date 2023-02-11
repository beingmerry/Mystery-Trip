import { Link } from 'react-router-dom'
import React from 'react'

export default function Header () {
  return (
    <nav className='flex items-end justify-between align-middle shadow md:px-2 py-2 dark:bg-gray-900'>
      <div className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        <Link to='/' className='no-underline inline-flex'>
          <h1 className='hover:scale-150 '>🔮</h1>
          <div className='md:px-2' />
          <h2>MysteryTrip</h2>
        </Link>
      </div>
      <h1 className='hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        Travel with a twist!
      </h1>
      <div className='dark:text-slate-100 space-x-4 p-1'>
        {/* <---- Login / Join ----> */}
        <Link
          to='/'
          className='bg-orange-600  hover:bg-orange-700 font-bold py-1 px-3 rounded'
          
        >
          Login / Join!
        </Link>
        {/* <---- Trips ----> */}
        <Link
          to='/trips'
          className='bg-blue-600  hover:bg-blue-700 font-bold py-1 px-3 rounded'
        >
          Trips
        </Link>
        {/* <---- Days ----> */}
        <Link
          to='/days'
          className='bg-blue-600  hover:bg-blue-700 font-bold py-1 px-3 rounded'
        >
          Days
        </Link>
        {/* <---- Activities ----> */}
        <Link
          to='/activities'
          className='bg-blue-600  hover:bg-blue-700 font-bold py-1 px-3 rounded'
        >
          Activities
        </Link>
      </div>
    </nav>
  )
}
