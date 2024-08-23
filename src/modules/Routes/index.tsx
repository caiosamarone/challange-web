import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { Layout } from '~/modules'
import { Admin, CreateAccount, Home, Login, NotFound } from '~/pages'

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
          path: '/login',
          element: <Login />
        },
        {
          path: '/create-account',
          element: <CreateAccount />
        },
        {
          path: '/admin',
          element: <Admin />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}
