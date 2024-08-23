import { Typography } from 'antd'

import { Container } from '~/components'

export const NotFound = () => {
  return (
    <Container>
      <Typography.Title className="font-poppins">Ops...</Typography.Title>
      <Typography.Title className="font-poppins">404</Typography.Title>
      <Typography.Title className="font-poppins">
        Pagina nao encontrada
      </Typography.Title>
    </Container>
  )
}
