import React, { useState, useEffect } from 'react'

export default function TripList () {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/trips')
      .then(res => res.json())
      .then(data => {
        setTrips(data)
      })
  }, [])
  return (
    <>
      <h1>Trip List</h1>
      <p>{trips}</p>
    </>
  )
}
