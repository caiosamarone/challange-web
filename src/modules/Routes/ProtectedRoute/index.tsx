import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = true
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/unauthorized')
    }
  }, [isAuthenticated, navigate])

  return children
}
