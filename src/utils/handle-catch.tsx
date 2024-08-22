import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

interface Response {
  message: string
}

export const handleCatch = (error: unknown) => {
  const err = error as AxiosError
  const dataError = err.response?.data as Response

  const errorMessage = dataError.message?.length
    ? dataError.message
    : 'Falha na requisição, tente novamente.'
  toast.error(errorMessage)
}
