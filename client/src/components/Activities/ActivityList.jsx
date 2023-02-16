import React, { useState, useEffect } from 'react'

export default function ActivityList () {
  const [activities, setActivities] = useState([])

  function deleteActivity (id) {
    fetch(`http://localhost:3001/api/v1/activities/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
  }
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/activities').then(res => {
      if (res.ok) {
        res.json().then(data => setActivities(data))
      } else {
        res.json().then(data => console.log(data))
      }
    })
  }, [])
  return (
    <>
      <h1>Activity List</h1>
    </>
  )
}
