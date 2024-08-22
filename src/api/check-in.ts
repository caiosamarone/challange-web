import { ICheckIn } from '~/interfaces'

import { API } from './api'

const BASE_PATH = 'check-in'

export const checkIn = async (params: ICheckIn.ICheckInParams) => {
  const data = await API.post(`${BASE_PATH}/gym/${params.gymId}`, {
    userId: params.userId
  })

  return data.data
}

export const validateCheckInUser = async (userId: string) => {
  const data = await API.get(`${BASE_PATH}/user/${userId}`)

  return data.data
}
