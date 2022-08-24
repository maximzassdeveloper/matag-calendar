import { calendarReducer } from './calendar/calendar.slice'
import { userReducer } from './user/user.slice'
import { emptySplitApi } from './api/emptySplit.api'

export const rootReducer = {
  user: userReducer,
  calendar: calendarReducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer
}

export const apiMiddleware = [
  emptySplitApi.middleware
]