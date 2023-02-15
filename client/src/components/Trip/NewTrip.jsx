import React, { useState } from 'react'

export default function NewTripForm () {
  const [tripData, setTripData] = useState({
    destination: '',
    trip_review: '',
    start_date: '',
    end_date: '',
    trip_thumbnail: ''
  })

  const handleChange = event => {
    const { name, value } = event.target
    setTripData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    fetch('/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  return (
    <form className='p-4 space-y-6 bg-slate-200 rounded-md' onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label
          className='block text-gray-700 font-bold mb-2'
          htmlFor='destination'
        >
          Trip destination
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='destination'
          type='text'
          name='destination'
          value={tripData.destination}
          onChange={handleChange}
          placeholder='Enter trip destination'
        />
      </div>
      <div>
        <label className='block text-gray-700 font-bold mb-2' htmlFor='review'>
          Trip Review
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='review'
          name='review'
          value={tripData.review}
          onChange={handleChange}
          placeholder='Enter trip review'
        />
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='start_date'
          >
            Start Date
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='start_date'
            type='date'
            name='start_date'
            value={tripData.start_date}
            onChange={handleChange}
            placeholder='Enter start date'
          />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='end_date'
          >
            End Date
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='end_date'
            type='date'
            name='end_date'
            value={tripData.end_date}
            onChange={handleChange}
            placeholder='Enter end date'
          />
        </div>
      </div>
      <div>
        <label
          className='block text-gray-700 font-bold mb-2'
          htmlFor='trip_thumbnail'
        >
          Trip URL for trip_thumbnail
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='trip_thumbnail'
          name='trip_thumbnail'
          value={tripData.trip_thumbnail}
          onChange={handleChange}
          placeholder='Enter trip trip_thumbnail'
        />
        <button
        type='submit'
        className='inline-block px-7 py-3 bg-blue-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        Create Trip
      </button>
      </div>
    </form>
  )
}
