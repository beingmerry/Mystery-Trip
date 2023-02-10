import { useState, useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function App () {
  const [showDefault, setShowDefault] = useState(false)

  return (
    <div className='flex flex-col h-screen justify-between '>
      <Header fixed={false} />
      <div className='flex h-full w-full align justify-center dark:bg-slate-700 overflow-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
