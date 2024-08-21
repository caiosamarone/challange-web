import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '~/hooks/useAuth'

interface Props {
  children?: React.ReactNode
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ToastContainer
        hideProgressBar
        position="bottom-left"
        theme="colored"
        autoClose={3000}
      />
      <AuthProvider>
        <ConfigProvider
          locale={ptBR}
          theme={{
            components: {},
            token: {
              fontFamily: "'Noto Sans', sans-serif",
              colorPrimary: '#001F3F'
            }
          }}
        >
          {children}
        </ConfigProvider>
      </AuthProvider>
    </>
  )
}
