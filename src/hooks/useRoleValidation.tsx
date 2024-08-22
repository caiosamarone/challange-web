import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { IAuthProps, useAuth } from './useAuth'

export const useRoleValidation = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const checkUserLogged = useCallback(() => {
    const userLogged = localStorage.getItem('user')
    if (userLogged) {
      const formatedUser = JSON.parse(userLogged) as IAuthProps
      setUser(formatedUser)
      if (formatedUser.role === 'ADMIN') {
        return navigate('/admin')
      }
      return navigate('/home')
    }
    navigate('/login')
  }, [])

  return {
    checkUserLogged
  }
}
