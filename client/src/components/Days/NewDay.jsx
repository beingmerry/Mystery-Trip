import React, { useState } from 'react'

export default function NewDay () {
  const [dayData, setDayData] = useState({
    notes: ''
  })

  const handleChange = event => {
    const { name, value } = event.target
    setDayData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/days', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(dayData)
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
        <div>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='notes'>
            Trip notes
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='notes'
            name='notes'
            value={dayData.notes}
            onChange={handleChange}
            placeholder='Enter day notes here...'
          />
        </div>
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
