import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { AppDispatch, TypeRootState } from '@/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector