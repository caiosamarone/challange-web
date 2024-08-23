import { useState } from 'react'
import { toast } from 'react-toastify'

import { APICheckIn } from '~/api'
import { handleCatch } from '~/utils/handle-catch'
import { sleep } from '~/utils/sleep'

type AlreadyCheckin = null | 'OK' | 'NONE'

export const useCheckIn = () => {
  const [loading, setLoading] = useState(false)
  const [alreadyCheckin, setAlreadyCheckin] = useState<AlreadyCheckin>(null)

  const makeCheckIn = async (gymId: string, userId: string) => {
    try {
      const { message } = await APICheckIn.checkIn({ gymId, userId })

      toast.success(message)
      setAlreadyCheckin('OK')
    } catch (err) {
      handleCatch(err)
    }
  }

  const checkIfUserAlreadyCheckin = async (userId: string) => {
    try {
      setLoading(true)
      await sleep(1000)
      const { checkIn } = await APICheckIn.validateCheckInUser(userId)

      if (checkIn.id) {
        setAlreadyCheckin('OK')
      } else {
        setAlreadyCheckin('NONE')
      }
      return checkIn
    } catch (err) {
      handleCatch(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    makeCheckIn,
    checkIfUserAlreadyCheckin,
    loading,
    alreadyCheckin
  }
}
