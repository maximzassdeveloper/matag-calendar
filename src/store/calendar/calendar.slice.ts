import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEvent } from '@/types/event.types'

type ModalEventType = 'create' | 'edit' | 'preview' | 'none'
interface ICalendarState {
  // For work with events
  isEventModalVisible: boolean
  modalEventType: ModalEventType
  selectedDate: Date
  selectedEvent: IEvent | null
  // For work with calendar
  calendarDate: Date
  // For work with days
  isDayModalVisible: boolean
}

const initialState: ICalendarState = {
  modalEventType: 'none',
  isEventModalVisible: false,
  selectedDate: new Date(),
  selectedEvent: null,

  calendarDate: new Date(),

  isDayModalVisible: false
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    changeSelectedDate(state: ICalendarState, action: PayloadAction<Date>) {
      state.selectedDate = action.payload
    },
    changeSelectedEvent(state: ICalendarState, action: PayloadAction<IEvent | null>) {
      state.selectedEvent = action.payload
    },
    changeEventModalType(state: ICalendarState, action: PayloadAction<ModalEventType>) {
      state.modalEventType = action.payload
    },
    openEventModal(state: ICalendarState) {
      state.isEventModalVisible = true
    },
    closeEventModal(state: ICalendarState) {
      state.isEventModalVisible = false
      state.selectedEvent = null
      state.modalEventType = 'none'
    },

    changeCalendarDate(state: ICalendarState, action: PayloadAction<Date>) {
      state.calendarDate = action.payload
    },

    openDayModal(state: ICalendarState) {
      state.isDayModalVisible = true
    },
    closeDayModal(state: ICalendarState) {
      state.isDayModalVisible = false
    },
  }
})

export const {
  reducer: calendarReducer,
  actions: calendarActions
} = calendarSlice