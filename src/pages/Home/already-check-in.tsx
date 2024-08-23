import { Typography } from 'antd'

import { useAuth } from '~/hooks/useAuth'
import { handleFirstName } from '~/utils/user-first-name'

export const AlreadyCheckIn = () => {
  const { user } = useAuth()
  return (
    <div>
      <Typography.Title className="font-poppins">
        Parece que você já fez check-in hoje!
      </Typography.Title>
      <div className="flex flex-col items-center gap-5 ">
        <Typography.Title level={3}>
          Te vejo amanhã, {handleFirstName(user.name)}!
        </Typography.Title>
        <img
          src="https://saude.sesisc.org.br/wp-content/uploads/sites/13/2023/09/Beneficios-de-fazer-academia-Para-sua-saude-e-seu-corpo-scaled.jpg"
          className="md:h-80  h-30 rounded-xl"
        />
      </div>
    </div>
  )
}
