// May want to delete on production site, useful for testing database

import React, { useState, useEffect } from 'react'

export default function CurrentUsers () {
  const [users, setUsers] = useState([])
  const [friends, setFriends] = useState([])

  function getUsers () {
    const token = localStorage.getItem('jwt')
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(data => setUsers(data.users))
      } else {
        res.json().then(data => {
          setUsers(`status: ${data.status}, message: ${data.error}`)
        })
      }
    })
  }

  function addFriend (id) {
    const token = localStorage.getItem('jwt')
    const userId = 1
    fetch(`http://localhost:3000/api/v1/users/${userId}/add_friend/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          setFriends(data.friends)
        })
      } else {
        res.json().then(data => {
          setUsers(`status: ${data.status}, message: ${data.error}`)
        })
      }
    })
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <div className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
        CurrentUsers
      </div>
      <button
        className='inline-block px-7 py-3 bg-emerald-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        onClick={() => getUsers()}
      >
        👥 Find some friends!
      </button>
      <div className='overflow-auto'>
        <table className='w-full text-sm text-left text-gray-200'>
          <thead className='text-xs text-gray-200 uppercase bg-gray-50 dark:bg-gray-700 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Username
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Location
              </th>
              <th scope='col' className='px-6 py-3'>
                Add Friend?
              </th>
              <th scope='col' className='px-6 py-3'>
                Avatar
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 🎯 Very hacky way to display errors, need to fix */}
            {typeof users === 'string' ? (
              <tr>
                <td>{users}</td>
              </tr>
            ) : (
              users.map(user => (
                <tr
                  key={user.id}
                  className='odd:bg-slate-400 even:bg-slate-500'
                >
                  <td className='px-6 py-0 whitespace-nowrap'>
                    {user.username}
                  </td>
                  <td className='px-6 py-0 whitespace-wrap'>{user.email}</td>
                  <td className='px-6 py-0 whitespace-wrap'>{user.location}</td>
                  <td className='px-6 py-0'>
                    <button onClick={() => addFriend(user.id)}>➕</button>
                  </td>
                  <td className='px-6 py-0 whitespace-nowrap'>
                    <img
                      className='h-12 w-12 rounded-full'
                      src={user.avatar}
                      alt=''
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
