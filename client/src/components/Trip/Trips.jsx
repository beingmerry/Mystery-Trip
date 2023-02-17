import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Trips () {
  // const location = useLocation()
  // console.log(location)
  return (
    <div className='container justify-center px-6 py-2 h-auto w-auto'>
      {/* <---- Trips ----> */}

      <Link
        to='new-trip'
        className='m-2 bg-blue-600  hover:bg-blue-700 font-bold py-1 px-3 rounded'
      >
        New Trip
      </Link>
      <Link
        to='trip-list'
        className='bg-blue-600 m-2  hover:bg-blue-700 font-bold py-1 px-3 rounded'
      >
        Trip List
      </Link>
      <div className='flex justify-center items-center flex-wrap h-full g-6 text-slate-200'>
        <div className='inline-flex flex-row'></div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
