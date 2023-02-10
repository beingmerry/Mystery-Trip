import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import NewTrip from './components/Trip/NewTrip'
import SplashLanding from './components/SplashLanding'
import TripList from './components/Trip/TripList'
import Trips from './components/Trip/Trips'

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
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default router
