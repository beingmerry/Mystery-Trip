import React, { useState } from 'react'
import SplashPic from '../assets/Splash_PersonWithBagAtAirport.png'
import LoginForm from './User/LoginForm'
import SignupForm from './User/SignupForm'

export default function SplashLanding () {
  const [showSignupForm, setShowSignupForm] = useState(false)
  return (
    <section className='h-auto'>
      <div className='container px-6 h-auto w-auto'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          {/* Left Hand Section 2-Column */}
          <div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
            <img
              src={SplashPic}
              className='w-full'
              alt='Cartoon of person getting ready to travel'
            />
          </div>
          {/* Right Hand Section 2-Column - drops below on media SM */}
          <div className='md:w-8/12 lg:w-5/12 lg:ml-20'>
            {showSignupForm ? <SignupForm /> : <LoginForm />}
            {/* <!-- Divider --> */}
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center font-semibold mx-4 mb-0 dark:text-slate-200'>
                {showSignupForm
                  ? 'Already have an account?'
                  : 'Not a Mystery Tripper yet?'}
              </p>
            </div>
            <button
              className='px-7 py-3 text-white bg-green-600 hover:bg-green-700 font-medium leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'
              onClick={() => setShowSignupForm(!showSignupForm)}
              role='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              {/* <!-- Register --> */}
              {showSignupForm ? 'Login' : 'Register'}
            </button>
            <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
              <p className='text-center font-semibold mx-4 mb-0 dark:text-slate-200'>
                Want to know a bit more about how it works?
              </p>
            </div>
            <a
              className='px-7 py-3 text-white bg-blue-700 hover:bg-blue-800 font-medium leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'
              href='#!'
              role='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              {/* <!-- Demo --> */}
              See a demo trip!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
