import { Card } from 'antd'

import { Container } from '~/components'

import { FeedGyms } from './feed-gyms'

export const Home = () => {
  return (
    <Container>
      <Card className="max-w-4xl">
        <FeedGyms />
      </Card>
    </Container>
  )
}
