import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CurrentUsers from './User/CurrentUsers'

export default function App () {
  return (
    <div className='flex flex-col h-screen justify-between '>
      <Header fixed={false} />
      <div className='flex flex-col h-full w-full align justify-center dark:bg-slate-700 overflow-auto'>
        <Outlet />

        <CurrentUsers />
      </div>

      <Footer />
    </div>
  )
}
