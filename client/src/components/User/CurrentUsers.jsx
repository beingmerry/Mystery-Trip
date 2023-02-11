// May want to delete on production site, useful for testing database

import React, { useState, useEffect } from 'react'

export default function CurrentUsers () {
  const [users, setUsers] = useState([])
  function getUsers () {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
        console.log(data)
      })
      .catch(err => console.log(err))
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
        ⚠️(Testing) Get Fresh Users List
      </button>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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
            {users.map(user => (
              <tr key={user.id}>
                <td className='px-6 py-4 whitespace-nowrap'>{user.username}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
