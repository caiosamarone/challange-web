import { Outlet } from 'react-router-dom'

import { Footer, Header } from './modules'

export const Layout = () => {
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
