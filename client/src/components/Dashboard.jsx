import React from 'react'

// Homepage of the application, ROOT = '/'

export default function Dashboard () {
  const [openGreeting, setOpenGreeting] = React.useState(true)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [trips, setTrips] = React.useState([])
  const [activities, setActivities] = React.useState([])
  const [days, setDays] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          setCurrentUser(data.user)
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
          <h1>
            👋 Hello {currentUser && <strong>{currentUser.username}</strong>}!
            Welcome to your next adventure 🚢✈️🧳
          </h1>
          <button className='text-right' onClick={() => setOpenGreeting(false)}>
            ❌
          </button>
        </div>
      )}
      <div className='p-4 flex flex-col items-center justify-center'>
        <h2 className='text-orange-400 bg-slate-600 rounded-md text-lg p-3'>
          Current Trips
        </h2>
        <p>The trips that you are planning or invited to will go here</p>
        <h2 className='text-orange-400 bg-slate-600 rounded-md text-lg p-3'>
          Current Days
        </h2>
        <p>You can always build days with activities</p>
        <h2 className='text-orange-400 bg-slate-600 rounded-md text-lg p-3'>
          Current Activities
        </h2>
        <p>Or create new activitie</p>
        <h2 className='text-orange-400 bg-slate-600 rounded-md text-lg p-3'>
          Friends
        </h2>
        <p>Or add new friends</p>
      </div>
    </>
  )
}

const greetingClass =
  'px-2 py-4 flex flex-row justify-between bg-slate-500 text-amber-200 rounded-md text-lg'
