// May want to delete on production site, useful for testing database

import React, { useState, useEffect } from 'react'

export default function CurrentFriends () {
  const [friends, setFriends] = useState([])

  function getFriends () {
    const token = localStorage.getItem('jwt')
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(data => setFriends(data.users))
      } else {
        res.json().then(data => {
          setFriends(`status: ${data.status}, message: ${data.error}`)
        })
      }
    })
  }

  useEffect(() => {
    getFriends()
  }, [])
  return (
    <>
      <button
        className='inline-block px-7 py-3 bg-emerald-500 text-white font-medium leading-snug uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        onClick={() => setFriends()}
      >
        ⚠️(Testing) Get Fresh Users List
      </button>
      <div className='overflow-auto'>
        <table className='w-full text-sm text-left text-gray-200'>
          <thead className='text-xs text-gray-200 uppercase bg-gray-50 dark:bg-gray-700 '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Username
              </th>
              <th scope='col' className='px-6 py-3'>
                Bio
              </th>
              <th scope='col' className='px-6 py-3'>
                Id
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
                <td>{friends}</td>
              </tr>
            ) : (
              friends.map(user => (
                <tr
                  key={user.id}
                  className='odd:bg-slate-400 even:bg-slate-500'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {user.username}
                  </td>
                  <td className='px-6 py-4 whitespace-wrap'>{user.bio}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{user.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
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
