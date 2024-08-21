import { ConfigProvider, theme as antTheme } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  return (
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
  )
}
