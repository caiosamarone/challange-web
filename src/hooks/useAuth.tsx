import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

import { APIAuth } from '~/api'

interface IUser {
  name: string
  id: string
  email: string
  password?: string
  created_at?: string
}
type Role = 'ADMIN' | 'USER' | null

interface AuthContextProps {
  loading: boolean
  user: IAuthProps
  setUser: (values: IAuthProps) => void
  onLogin: (email: string, password: string) => Promise<Role | undefined>
  onLogout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

interface AuthProviderProps {
  children: React.ReactNode
}
export interface IAuthProps extends Pick<IUser, 'name' | 'email' | 'id'> {
  role: Role
}

const INITIAL_STATE = {
  name: '',
  role: null,
  email: '',
  id: ''
} as IAuthProps

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<IAuthProps>(INITIAL_STATE)

  const onLogin = async (email: string, password: string) => {
    setLoading(true)
    try {
      const { userId, name, permission } = await APIAuth.login(email, password)
      const loggedUser = {
        id: userId,
        email,
        name,
        role: permission
      } as IAuthProps
      setUser(loggedUser)

      localStorage.setItem('user', JSON.stringify(loggedUser))

      return permission
    } catch (er) {
      toast.error('Credenciais invalidas.')
      console.error(er)
    } finally {
      setLoading(false)
    }
  }

  const onLogout = () => {
    setUser(INITIAL_STATE)
    localStorage.clear()
  }

  const context = {
    loading,
    user,
    setUser,
    onLogin,
    onLogout
  }

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
