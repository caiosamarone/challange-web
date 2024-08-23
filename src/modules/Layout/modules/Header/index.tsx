import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '~/hooks/useAuth'
import { handleFirstName } from '~/utils/user-first-name'

export const Header = () => {
  const { user, onLogout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <header className="min-h-12 bg-gray-50 px-4 py-4 md:py-6 md:px-20">
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-4">
          <img
            className="rounded-lg w-[5rem]"
            src="https://i.imgur.com/IsrXpY0.jpeg"
          />
        </div>
        {user.id && (
          <div className="pr-12 flex gap-4 items-center">
            <div className="flex gap-2">
              <Avatar size="small" icon={<UserOutlined />} />
              <p>{handleFirstName(user.name)}</p>
            </div>

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
