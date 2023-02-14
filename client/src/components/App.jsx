import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CurrentUsers from './User/CurrentUsers'

export default function App () {
  const [userLoggedIn, setUserLoggedIn] = React.useState(
    !!localStorage.getItem('jwt') || false
  )

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      <div className="bg-[url('./img/topography.svg')] flex-1 flex-col w-full h-fit align-top justify-center dark:bg-slate-700">
        <Outlet context={[userLoggedIn, setUserLoggedIn]} />
        <p>userLoggedIn: {String(userLoggedIn)}</p>
        <CurrentUsers className='flex' />
      </div>

      <Footer classname='fixed' />
    </div>
  )
}
