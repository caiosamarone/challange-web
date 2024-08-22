import { IUser } from '~/interfaces'

import { API } from './api'

const BASE_PATH = 'users'

export const createAccount = async (params: IUser.CreateUserParams) => {
  const { status } = await API.post(`${BASE_PATH}`, params)

  return status
}

export const getAllUsers = async () => {
  const { data } = await API.get<IUser.GetAllUsersResponse>(`${BASE_PATH}`)

  return data.data
}
export const deleteUser = async (id: string) => {
  const { status, data } = await API.delete(`${BASE_PATH}/${id}`)
  return { status, data }
}
