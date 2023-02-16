import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import SplashLanding from './components/SplashLanding'
import ToolsAndTech from './components/ToolsAndTech'

import Trips from './components/Trip/Trips'
import NewTrip from './components/Trip/NewTrip'
import TripList from './components/Trip/TripList'

import Days from './components/Days/Days'
import NewDay from './components/Days/NewDay'
import DayList from './components/Days/DayList'

import Activities from './components/Activities/Activities'
import NewActivity from './components/Activities/NewActivity'
import ActivityList from './components/Activities/ActivityList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <SplashLanding />
      },
      {
        path: 'trips',
        element: <Trips />,
        children: [
          {
            path: 'new-trip',
            element: <NewTrip />
          },
          {
            path: 'trip-list',
            element: <TripList />
          }
        ]
      },
      {
        path: 'days',
        element: <Days />,
        children: [
          {
            path: 'new-day',
            element: <NewDay />
          },
          {
            path: 'day-list',
            element: <DayList />
          }
        ]
      },
      {
        path: 'activities',
        element: <Activities />,
        children: [
          {
            path: 'new-activity',
            element: <NewActivity />
          },
          {
            path: 'Activity-list',
            element: <ActivityList />
          }
        ]
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'tools-and-tech',
        element: <ToolsAndTech />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default router
