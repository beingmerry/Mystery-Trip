import React, { useState } from 'react'

export default function NewActivity () {
  const [activityData, setActivityData] = useState({
    name: '',
    hours: 0
  })

  const handleChange = event => {
    const { name, value } = event.target
    setActivityData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization
      },
      body: JSON.stringify(activityData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  return (
    <form
      className='p-4 space-y-6 bg-slate-200 rounded-md'
      onSubmit={e => handleSubmit(e)}
    >
      <div>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
          Activity name
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='name'
          type='text'
          name='name'
          value={activityData.name}
          onChange={handleChange}
          placeholder='Archery, Beach, Canoe, Dance...'
        />
      </div>
      <div>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='hours'>
          Activity hours
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='hours'
          name='hours'
          type='integer'
          value={activityData.hours}
          onChange={handleChange}
          placeholder='Enter Activity hours'
        />
      </div>
      <div>
        <button
          type='submit'
          className='inline-block px-7 py-3 bg-blue-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          Create Activity
        </button>
      </div>
    </form>
  )
}
