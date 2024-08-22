import { Modal, Typography } from 'antd'
import { useEffect } from 'react'

import { GymCard, GymSkeleton } from '~/components'
import { useAuth } from '~/hooks/useAuth'
import { useCheckIn } from '~/hooks/useCheckIn'
import { useGyms } from '~/hooks/useGyms'

export const FeedGyms = () => {
  const { user } = useAuth()
  const { gyms, loading, fetchGyms } = useGyms()
  const { makeCheckIn } = useCheckIn()

  useEffect(() => {
    fetchGyms()
  }, [])

  const onCheckIn = (title: string, id: string) => {
    Modal.confirm({
      type: 'success',
      title: 'Fazer Check-in',
      content: `Deseja fazer Check-in na academia ${title}? `,
      onOk: async () => await makeCheckIn(id, user.id)
    })
  }

  return (
    <div>
      <Typography.Title level={3} className="font-poppins">
        Olá, {user.name} 👋!
      </Typography.Title>
      <Typography.Title level={3} className="font-notosans">
        Você ainda não fez um Check-In hoje... Vamos realizar uma atividade?
      </Typography.Title>
      <Typography.Text className="text-lg font-notosans">
        Busque a academia mais próxima e faça um Check-In agora!
      </Typography.Text>
      <Typography.Text className="text-sm block text-zinc-400 font-notosans">
        *Você só pode fazer um check-in por dia
      </Typography.Text>
      {loading ? (
        <GymSkeleton />
      ) : (
        <div className="mt-6 max-h-[25rem] overflow-auto md:grid lg:grid-cols-3 md:grid-cols-2 gap-y-[1.5rem] flex flex-col align-center">
          {gyms.map((gym) => (
            <GymCard key={gym.id} {...gym} onCheckIn={onCheckIn} />
          ))}
        </div>
      )}
    </div>
  )
}
