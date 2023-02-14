import React from 'react'

// Homepage of the application, ROOT = '/'

export default function Dashboard () {
  const [openGreeting, setOpenGreeting] = React.useState(true)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [trips, setTrips] = React.useState([])
  const [activities, setActivities] = React.useState([])
  const [days, setDays] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/api/v1/users/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          setTrips(data)
          console.log(data)
        })
      } else {
        res.json().then(errors => {
          console.log(errors)
        })
      }
    })
  }, [])
  React.useEffect(() => {
    fetch('http://localhost:3000/api/v1/trips', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          setTrips(data)
          console.log(data)
        })
      } else {
        res.json().then(errors => {
          console.log(errors)
        })
      }
    })
  }, [])

  return (
    <>
      {openGreeting && (
        <div className={greetingClass}>
          <h1>👋 Hello {}! Welcome to your next adventure 🚢✈️🧳</h1>
          <button className='text-right' onClick={() => setOpenGreeting(false)}>
            ❌
          </button>
        </div>
      )}
      <h2>Current Trips</h2>
      <h2>Current Days</h2>
      <h2>Current Activities</h2>
    </>
  )
}

const greetingClass =
  'px-2 py-4 flex flex-row justify-between bg-slate-500 text-amber-200 rounded-md font-semibold text-lg'
