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
    closeEventModal(state: ICalendarState) {
      state.isEventModalVisible = false
      state.selectedEvent = null
      state.modalEventType = 'none'
    },

    openEventPreviewModal(state: ICalendarState, action: PayloadAction<IEvent>) {
      state.isEventModalVisible = true
      state.selectedEvent = action.payload
      state.modalEventType = 'preview'
    },
    openEventEditModal(state: ICalendarState, action: PayloadAction<IEvent>) {
      state.isEventModalVisible = true
      state.selectedEvent = action.payload
      state.modalEventType = 'edit'
    },
    openEventCreateModal(state: ICalendarState, action: PayloadAction<Date>) {
      state.isEventModalVisible = true
      state.selectedDate = action.payload
      state.modalEventType = 'create'
    },

    changeCalendarDate(state: ICalendarState, action: PayloadAction<Date>) {
      state.calendarDate = action.payload
    },

    openDayModal(state: ICalendarState, action: PayloadAction<Date>) {
      state.isDayModalVisible = true
      state.selectedDate = action.payload
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