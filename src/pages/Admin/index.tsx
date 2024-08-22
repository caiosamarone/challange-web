import { ToolOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { useState } from 'react'

import { AdminCards, Container } from '~/components'

import { Gyms } from './Gyms'
import { Users } from './users'

export type CurrentSelected = 'GYMS' | 'USERS' | 'NONE'

export const Admin = () => {
  const [currentSelected, setCurrentSelected] =
    useState<CurrentSelected>('NONE')

  const handleCurrentSelected = (selected: CurrentSelected) => {
    setCurrentSelected(selected)
  }

  return (
    <Container minHeight={600} minWidth={750}>
      {currentSelected === 'NONE' && (
        <>
          <Typography.Title className="font-poppins text-center" level={3}>
            Seja bem-vindo ao painel admnistrativo <ToolOutlined />
          </Typography.Title>
          <Typography.Text className="font-notosans text-base pt-8 block text-center">
            Você pode gerenciar academias e usuários por aqui
          </Typography.Text>
          <AdminCards onSelectCard={handleCurrentSelected} />
        </>
      )}
      {currentSelected === 'GYMS' && (
        <Gyms onSelectCard={handleCurrentSelected} />
      )}
      {currentSelected === 'USERS' && (
        <Users onSelectCard={handleCurrentSelected} />
      )}
    </Container>
  )
}
