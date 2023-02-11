import React, { useState } from 'react'

export default function SignupForm ({ setUser }) {
  const [errors, setErrors] = useState(null)
  const [formUser, setFormUser] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')

  function handleNewUser (e) {
    e.preventDefault()
    const newUser = {
      user: {
        username: formUser,
        email: formEmail,
        password: formPassword
      }
    }
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
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
  function testUserCreate (e) {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: 'sylviawoods',
          password: 'whatscooking',
          bio: "Sylvia Woods was an American restaurateur who founded the soul food restaurant Sylvia's in Harlem on Lenox Avenue, New York City in 1962. She published two cookbooks and was an important figure in the community.",
          avatar:
            'https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg'
        }
      })
    })
      .then(r => r.json())
      .then(console.log)
  }
  return (
    // long term use handleNewUser, currently testing with
    <form onSubmit={e => testUserCreate(e)}>
      {/* <!-- user input --> */}
      <div className='mb-6'>
        <input
          type='text'
          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Username'
          value={formEmail}
          onChange={e => setFormEmail(e.target.value)}
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

      {/* <!-- Sign in button --> */}
      <button
        type='submit'
        className='inline-block px-7 py-3 bg-blue-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        Sign in
      </button>
      <p>{errors && { errors }}</p>
    </form>
  )
}
