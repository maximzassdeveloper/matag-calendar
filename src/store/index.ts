import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { apiMiddleware, rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(apiMiddleware)
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch