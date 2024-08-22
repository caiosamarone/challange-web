import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useRoleValidation } from '~/hooks/useRoleValidation'

import { Footer, Header } from './modules'

export const Layout = () => {
  const { checkUserLogged } = useRoleValidation()

  useEffect(() => {
    checkUserLogged()
  }, [checkUserLogged])

  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-130px)] bg-[#001F3F]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
