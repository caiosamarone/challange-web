import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Layout } from '~/modules'
import { ProtectedRoute } from '~/modules/Routes/ProtectedRoute'
import { Home, Login, NotAuthorized } from '~/pages'

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
          element: <div>create account</div>
        },
        {
          path: '/admin',
          element: (
            <ProtectedRoute>
              <div>Admin</div>
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
