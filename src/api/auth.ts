import { IAuth } from '~/interfaces'

import { API } from './api'

const BASE_PATH = 'login'

export const login = async (email: string, password: string) => {
  const data = await API.post<IAuth.AuthResponse>(`${BASE_PATH}`, {
    email,
    password
  })

  return data.data
}
