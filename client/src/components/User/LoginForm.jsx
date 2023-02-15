import React, { useState } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

export default function LoginForm () {
  // Pulling from top level context
  const [userLoggedIn, setUserLoggedIn] = useOutletContext()

  // Local state
  const [errors, setErrors] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Navigation
  const navigate = useNavigate()

  // Log in function
  function handleLoginUser (e) {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    }).then(r => {
      if (r.ok) {
        r.json().then(data => {
          localStorage.setItem('jwt', data.jwt)
          setUserLoggedIn(true)
          navigate('/dashboard')
        })
      } else {
        r.json().then(data => {
          setErrors(data.message)
        })
      }
    })
  }

  return (
    <form onSubmit={e => handleLoginUser(e)}>
      {/* <!-- Email input --> */}
      <div className='mb-6'>
        <input
          type='text'
          className='form-control w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Email address'
          value={username}
          onChange={e => setUsername(e.target.value)}
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

      {/* <!-- Sign in button --> */}
      <button
        type='submit'
        className='inline-block px-7 py-3 bg-blue-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        Sign in
      </button>
      {errors && <p className='text-red-500'>{errors}</p>}
    </form>
  )
}
