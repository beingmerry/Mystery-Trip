import React from 'react'

// Homepage of the application, ROOT = '/'

export default function Dashboard () {
  const [trips, setTrips] = React.useState([])
  const [activities, setActivities] = React.useState([])
  const [days, setDays] = React.useState([])
  React.useEffect(() => {
    fetch('/api/trips')
    .then(res => res.json())
    .then(data => setTrips(data))
  }, [])



 return <h1>Dashboard</h1>
}
