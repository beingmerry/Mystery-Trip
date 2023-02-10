import React, { useState } from 'react'

export default function LoginForm ({ setUser }) {
  const [errors, setErrors] = useState(null)
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function setLoginUser (e) {
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
          console.log(data)
          setUser('test')
        })
      } else {
        r.json().then(data => {
          setErrors(data.errors)
          console.log(data.errors)
        })
      }
    })
  }
  return (
    <form onSubmit={e => setLoginUser(e)}>
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

      {/* <!-- Sign in button --> */}
      <button
        type='submit'
        className='inline-block px-7 py-3 bg-blue-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        Sign in
      </button>
      <p>{errors && {errors}}</p>
    </form>
  )
}
