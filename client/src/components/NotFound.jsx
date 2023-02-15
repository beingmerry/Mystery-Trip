import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function NotFound () {
  const navigate = useNavigate()
  const error = useRouteError()
  console.error(error)
  return (
    <div id='error page' className='flex-col justify-around'>
      <h3 className='bg-red-400'>404! Page not found</h3>
      <p className='text-white'>
        <i>🤖 ERROR ERROR ERROR 🤖</i>
      </p>
      <button
        className='bg-orange-600  hover:bg-orange-700 font-bold py-1 px-3 rounded'
        onClick={() => {
          navigate(-1)
        }}
      >
        Go back
      </button>
    </div>
  )
}
