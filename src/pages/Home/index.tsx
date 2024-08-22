import { Card, Typography } from 'antd'

import { useAuth } from '~/hooks/useAuth'

export const Home = () => {
  const { user } = useAuth()

  return (
    <div className="grid place-content-center pt-[calc(100vh/2-200px)]">
      <Card
        title="Login"
        bordered
        bodyStyle={{
          minWidth: 400
        }}
      >
        <Typography.Title level={3}>Ola, {user.name}!</Typography.Title>
      </Card>
    </div>
  )
}
