import { Card, Spin, Typography } from 'antd'
import { useEffect, useMemo } from 'react'

import { Container } from '~/components'
import { useAuth } from '~/hooks/useAuth'
import { useCheckIn } from '~/hooks/useCheckIn'
import { handleFirstName } from '~/utils/user-first-name'

import { AlreadyCheckIn } from './already-check-in'
import { FeedGyms } from './feed-gyms'

export const Home = () => {
  const { loading, alreadyCheckin, checkIfUserAlreadyCheckin, makeCheckIn } =
    useCheckIn()
  const { user } = useAuth()

  useEffect(() => {
    if (user.id) {
      checkIfUserAlreadyCheckin(user.id)
    }
  }, [user.id])

  const memoizedHandleWrapper = useMemo(() => {
    switch (alreadyCheckin) {
      case 'NONE':
        return <FeedGyms makeCheckIn={makeCheckIn} />
      case 'OK':
        return <AlreadyCheckIn />
      default:
        return <Spin />
    }
  }, [alreadyCheckin])

  if (loading) {
    return (
      <Container>
        <div className="w-full h-[400px] flex items-center justify-center">
          <Card>
            <div className="flex flex-col justify-center items-center gap-4">
              <Typography.Title level={4} className="font-poppins mr-4">
                Ola, {handleFirstName(user.name)}! Validando suas infomacões
              </Typography.Title>
              <Spin />
            </div>
          </Card>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Card className="max-w-4xl">{memoizedHandleWrapper}</Card>
    </Container>
  )
}
