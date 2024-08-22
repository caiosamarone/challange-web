import { useState } from 'react'
import { toast } from 'react-toastify'

import { APIUser } from '~/api'
import { IUser } from '~/interfaces'
import { handleCatch } from '~/utils/handle-catch'
import { sleep } from '~/utils/sleep'

export const useUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<IUser.Item[]>([])

  const fetchUsers = async () => {
    setLoading(true)
    await sleep(500)
    try {
      const response = await APIUser.getAllUsers()
      setUsers(response)
    } catch (error) {
      handleCatch(error)
    } finally {
      setLoading(false)
    }
  }

  const fetchDeleteUser = async (id: string) => {
    try {
      const { status } = await APIUser.deleteUser(id)
      if (status === 204) {
        toast.success('Usuario deletado com sucesso!')
        fetchUsers()
      }
    } catch (error) {
      handleCatch(error)
    }
  }

  return {
    loading,
    users,
    setLoading,
    fetchUsers,
    fetchDeleteUser
  }
}
