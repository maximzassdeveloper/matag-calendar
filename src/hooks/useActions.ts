import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import actions from '@/store/rootAction'

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}