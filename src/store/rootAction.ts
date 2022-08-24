import { calendarActions } from './calendar/calendar.slice'
import * as userActions from './user/user.actions'

export default {
  ...userActions,
  ...calendarActions
}

