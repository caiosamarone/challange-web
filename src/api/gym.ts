import { IGym } from '~/interfaces'

import { API } from './api'

const BASE_PATH = 'gym'

export const createGym = async (params: IGym.CreateGymParams) => {
  const { status } = await API.post(`${BASE_PATH}`, params)

  return status
}

export const getAllGyms = async () => {
  const { data } = await API.get<IGym.GetAllGymResponse>(`${BASE_PATH}`)

  return data.data
}

export const updateGym = async (params: IGym.UpdateGymParams) => {
  const { status } = await API.put(`${BASE_PATH}/${params.id}`, params.id)

  return status
}
