import { CheckCircleOutlined, LogoutOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '~/hooks/useAuth'

export const Header = () => {
  const { user, onLogout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <header className="min-h-12 bg-gray-50 py-6 px-20">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-4">
          <Typography.Title level={4} className="font-poppins">
            Checkfy
          </Typography.Title>
          <CheckCircleOutlined style={{ fontSize: '1.25rem' }} />
        </div>
        {user.id && (
          <div className="pr-12 flex gap-4 items-center">
            <Button className="flex  items-center gap-2" onClick={handleLogout}>
              <p className="text-base">Sair</p>
              <LogoutOutlined style={{ fontSize: '1.25rem' }} />
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
