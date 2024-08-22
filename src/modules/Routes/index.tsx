import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Layout } from '~/modules'
import { ProtectedRoute } from '~/modules/Routes/ProtectedRoute'
import { Admin, CreateAccount, Home, Login, NotAuthorized } from '~/pages'

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/login" />
        },
        {
          path: '/unauthorized',
          element: <NotAuthorized />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/create-account',
          element: <CreateAccount />
        },
        {
          path: '/admin',
          element: (
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          )
        },
        {
          path: '/home',
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          )
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
