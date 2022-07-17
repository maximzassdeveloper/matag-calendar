import { FC } from 'react'
import { Calendar } from '../generetic'
import { CalendarHeader } from './CalendarHeader'
import './mini-calendar.less'

export const MiniCalendar: FC = () => {
  return (
    <Calendar 
      className='mini-calendar'
      fullscreen={false}
      headerRender={CalendarHeader}
    />
  )
}