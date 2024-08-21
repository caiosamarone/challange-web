import { Button, Card } from 'antd'
import { useCallback, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '~/hooks/useAuth'

export const Home = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const validatePermission = useCallback(() => {
    if (user.role === 'ADMIN') {
      navigate('/admin')
    }
  }, [user])

  useLayoutEffect(() => validatePermission(), [])

  return (
    <div className="grid place-content-center pt-[calc(100vh/2-200px)]">
      <Card
        title="Login"
        bordered
        bodyStyle={{
          minWidth: 400
        }}
      >
        Home
      </Card>
    </div>
  )
}
