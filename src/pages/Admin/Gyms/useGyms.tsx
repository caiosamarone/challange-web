import { useState } from 'react'
import { toast } from 'react-toastify'

import { APIGym } from '~/api'
import { IGym } from '~/interfaces'
import { handleCatch } from '~/utils/handle-catch'
import { sleep } from '~/utils/sleep'

export const useGyms = () => {
  const [loading, setLoading] = useState(false)
  const [gyms, setGyms] = useState<IGym.Item[]>([])
  const [curItem, setCurItem] = useState<IGym.Item>()
  const [modalVisbile, setModalVisible] = useState(false)

  const fetchGyms = async () => {
    setLoading(true)
    await sleep(500)
    try {
      const response = await APIGym.getAllGyms()
      setGyms(response)
    } catch (error) {
      handleCatch(error)
    } finally {
      setLoading(false)
    }
  }
  const fetchCreateGym = async (gym: IGym.CreateGymParams) => {
    try {
      const statusCode = await APIGym.createGym(gym)
      if (statusCode === 201) {
        fetchGyms()
        toast.success('Academia criada com sucesso')
        toggleModal()
      }
    } catch (error) {
      handleCatch(error)
    }
  }
  const fetchUpdateGym = async (gym: IGym.UpdateGymParams) => {
    try {
      const statusCode = await APIGym.updateGym(gym)
      if (statusCode === 204) {
        fetchGyms()
        toast.success('Academia editada com sucesso')
        toggleModal()
      }
    } catch (error) {
      handleCatch(error)
    }
  }
  const handleUpdate = async (gym: IGym.UpdateGymParams) => {
    setCurItem(gym)
    toggleModal()
  }
  const toggleModal = () => {
    setModalVisible((prev) => !prev)
  }
  const handleClose = () => {
    setCurItem(undefined)
    toggleModal()
  }
  return {
    loading,
    setLoading,
    handleClose,
    gyms,
    fetchGyms,
    fetchUpdateGym,
    fetchCreateGym,
    toggleModal,
    modalVisbile,
    handleUpdate,
    curItem
  }
}
