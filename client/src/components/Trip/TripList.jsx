import React, { useState, useEffect } from 'react'
import TripCard from './TripCard'

export default function TripList () {
  const [trips, setTrips] = useState([])
  function removeTrip (id) {
    setTrips(trips.filter(trip => trip.id !== id))
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
        trips.map(trip => (
          <TripCard trip={trip} removeTrip={removeTrip} key={trip.id} />
        ))}
    </>
  )
}
