import { useState } from 'react'
import { toast } from 'react-toastify'

import { APICheckIn } from '~/api'
import { handleCatch } from '~/utils/handle-catch'

export const useCheckIn = () => {
  const [loading, setLoading] = useState(false)

  const makeCheckIn = async (gymId: string, userId: string) => {
    try {
      const message = await APICheckIn.checkIn({ gymId, userId })
      toast.success(message)
    } catch (err) {
      handleCatch(err)
    }
  }

  const checkIfUserAlreadyCheckin = async (userId: string) => {
    try {
      setLoading(true)
      const data = await APICheckIn.validateCheckInUser(userId)
      return data
    } catch (err) {
      handleCatch(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    makeCheckIn,
    checkIfUserAlreadyCheckin,
    loading
  }
}
