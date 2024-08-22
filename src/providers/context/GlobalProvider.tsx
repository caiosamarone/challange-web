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
            components: {
              Button: {
                borderRadius: 16,
                borderRadiusSM: 16,
                borderRadiusLG: 20,
                primaryShadow: '0 2px 0 0 rgba(0, 0, 0, 0.02)',
                primaryColor: 'white'
              }
            },
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
