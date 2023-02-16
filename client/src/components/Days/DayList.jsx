import React, { useState, useEffect } from 'react'

export default function TripList () {
  const [trips, setTrips] = useState([])

  function deleteTrip (id) {
    fetch(`http://localhost:3001/api/v1/trips/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    })
  }
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/trips').then(res => {
      if (res.ok) {
        res.json().then(data => setTrips(data))
      } else {
        res.json().then(data => console.log(data))
      }
    })
  }, [])
  return (
    <>
      <h1>Trip List</h1>
      {trips &&
        trips.map(trip => {
          return (
            <>
              <div key={trip.id} className='p-2 mx-0 my-1 text-white bg-slate-800 max-w-sm rounded overflow-hidden shadow-lg'>
                <img
                  className='w-full'
                  src={trip.trip_thumbnail}
                  alt={trip.destination}
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>
                    {trip.destination}
                  </div>
                  <p className='text-gray-300 text-lg'>
                    {trip.start_date} to {trip.end_date}
                  </p>
                  <p className='text-gray-200 text-base'>{trip.trip_review}</p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    # of Days
                  </span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    # of Activities
                  </span>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    Days till trip
                  </span>
                </div>
                <span className='inline-block '>
                  <button className='inline-block bg-blue-600 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2' onClick={() => console.log(trip)}>View Trip</button>
                  <button className='inline-block text-white bg-blue-600 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2' onClick={() => console.log(trip)}>Edit Trip</button>
                  <button className='inline-block text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2' onClick={() => deleteTrip(trip.id)}>Delete Trip</button>
                </span>
              </div>
            </>
          )
        })}
    </>
  )
}
