import { IUser } from '~/interfaces'

import { API } from './api'

const BASE_PATH = 'users'

export const createAccount = async (params: IUser.CreateUserParams) => {
  const { status } = await API.post(`${BASE_PATH}`, params)

  return status
}
