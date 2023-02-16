import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Activities () {
  const location = useLocation()
  console.log(location)
  return (
    <div className='container justify-center px-6 py-2 h-auto w-auto'>
      {/* <---- Activities ----> */}

      <Link
        to='new-activity'
        className='m-2 bg-blue-600  hover:bg-blue-700 font-bold py-1 px-3 rounded'
      >
        New Activity
      </Link>
      <Link
        to='activity-list'
        className='bg-blue-600 m-2  hover:bg-blue-700 font-bold py-1 px-3 rounded'
      >
        Activity List
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
