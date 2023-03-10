import React, { useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

const testUser = {
  username: 'ben',
  password: 'test',
  email: 'ben.test@domain.tld',
  location: 'Philadelphia, PA'
}

export default function SignupForm () {
  // Pulling from top level context
  const [userLoggedIn, setUserLoggedIn] = useOutletContext()
  // Local State
  const [errors, setErrors] = useState(null)
  const [formUser, setFormUser] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formLocation, setFormLocation] = useState('')
  const [formPassword, setFormPassword] = useState('')

  // Navigation
  const navigate = useNavigate()

  function testUserFill (currentTestUser) {
    setFormUser(currentTestUser.username)
    setFormEmail(currentTestUser.email)
    setFormLocation(currentTestUser.location)
    setFormPassword(currentTestUser.password)
  }
  function handleNewUser (e) {
    e.preventDefault()
    // ⚠️ Change to email once done w/ testing
    const newUser = {
      user: {
        username: formUser,
        email: formEmail,
        location: formLocation,
        password: formPassword
      }
    }
    fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(r => {
      if (r.ok) {
        r.json().then(data => {
          localStorage.setItem('jwt', data.jwt)
          setUserLoggedIn(true)
          navigate('dashboard')
        })
      } else {
        r.json().then(data => {
          setErrors(data.errors.username[0])
        })
      }
    })
  }
  return (
    <>
      {/* <!-- Test fill form button --> */}
      <button
        type='submit'
        className='inline-block px-7 py-3 bg-slate-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
        onClick={() => testUserFill(testUser)}
      >
        ⚠️ Test Fill Form ⚠️
      </button>
      <p className='text-red-500'>{errors !== '' && errors}</p>
      <form onSubmit={e => handleNewUser(e)}>
        {/* <!-- Username input --> */}
        <div className='mb-6'>
          <input
            type='text'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Username'
            value={formUser}
            onChange={e => setFormUser(e.target.value)}
          />
        </div>
        {/* <!-- Email input --> */}
        <div className='mb-6'>
          <input
            type='text'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Email address'
            value={formEmail}
            onChange={e => setFormEmail(e.target.value)}
          />
        </div>
        {/* <!-- Avatar / Profile Picture input --> */}
        <div className='mb-6'>
          <input
            type='text'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Location'
            value={formLocation}
            onChange={e => setFormLocation(e.target.value)}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className='mb-6'>
          <input
            type='password'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Password'
            value={formPassword}
            onChange={e => setFormPassword(e.target.value)}
          />
        </div>

        {/* <!-- Create Account button --> */}
        <button
          type='submit'
          className='inline-block px-7 py-3 bg-orange-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out w-full'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          Create Account
        </button>
      </form>
    </>
  )
}
