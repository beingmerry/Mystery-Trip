import { useState } from 'react'
import SplashPic from '../assets/Splash_PersonWithBagAtAirport.png'

function errorMap (errors) {
  return (
    <ul style={{ color: 'red' }}>
      {errors.map(error => (
        <li>{error}</li>
      ))}
    </ul>
  )
}

export default function SplashLanding () {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  function handleLoginUser (e) {
    e.preventDefault()
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail,
        password
      })
    }).then(r => {
      if (r.ok) {
        r.json().then(data => {
          login()
        })
      } else {
        r.json().then(data => {
          setErrors(data.errors)
        })
      }
    })
  }
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <section className='h-auto'>
      <div className='container px-6 h-auto w-auto'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
            <img
              src={SplashPic}
              className='w-full'
              alt='Cartoon of person getting ready to travel'
            />
          </div>
          <div className='md:w-8/12 lg:w-5/12 lg:ml-20'>
            <form onSubmit={e => handleLoginUser(e)}>
              {/* <!-- Email input --> */}
              <div className='mb-6'>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Email address'
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className='mb-6'>
                <input
                  type='password'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className='flex justify-between items-center mb-6'>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input  appearance-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    // className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    id='exampleCheck3'
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    className='form-check-label inline-block text-gray-300'
                    htmlFor='exampleCheck2'
                  >
                    Remember me?
                  </label>
                </div>
                <a
                  href='#!'
                  className='text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out'
                >
                  Forgot password?
                </a>
              </div>

              {/* <!-- Sign in button --> */}
              <button
                type='submit'
                className='inline-block px-7 py-3 bg-blue-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                Sign in
              </button>
              <p></p>
              {/* <!-- Divider --> */}
              <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
                <p className='text-center font-semibold mx-4 mb-0 dark:text-slate-200'>
                  Not a Mystery Tripper yet?
                </p>
              </div>

              <a
                className='px-7 py-3 text-white bg-green-600 hover:bg-green-700 font-medium leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'
                href='#!'
                role='button'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                {/* <!-- Register --> */}
                Register
              </a>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
