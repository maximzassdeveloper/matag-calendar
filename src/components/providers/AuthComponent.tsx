import { FC, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getTokenLocal } from '@/services/authService'
import { getUser } from '@/store/selectors'
import { Wrapper } from '../Layout/Layout'
import { AuthWrapper } from '../Auth/AuthWrapper'

export const AuthComponent: FC = () => {
  const { refresh } = useActions()
  const { isAuth } = useTypedSelector(getUser)

  useEffect(() => {
    const token = getTokenLocal()
    if (token) {
      refresh()
    }
  }, [])

  return (
    isAuth
      ? <Wrapper />
      : <AuthWrapper isVisible onCancel={() => null} />
  )
}