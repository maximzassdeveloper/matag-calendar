import _ from 'lodash'
import { HeaderRender } from 'antd/lib/calendar/generateCalendar'
import { add, format } from 'date-fns'
import { ru } from 'date-fns/esm/locale'

export const CalendarHeader: HeaderRender<Date> = ({ value, onChange }) => {

  const renderDate = () => {
    return _.upperFirst(format(value, 'LLLL y', { locale: ru }))
  }

  const changeMonthHandler = (next: boolean) => {
    onChange(add(value, { months: next ? 1 : -1 }))
  }

  return (
    <div className='mini-calendar-header'>
      <span className='mini-calendar-header-date'>
        {renderDate()}
      </span>
      <div className='mini-calendar-header-arrows'>
        <div onClick={() => changeMonthHandler(false)} className='mini-calendar-header-arrow'>
          <i className='ph-caret-left'/>
        </div>
        <div onClick={() => changeMonthHandler(true)} className='mini-calendar-header-arrow'>
          <i className='ph-caret-right'/>
        </div>
      </div>
    </div>
  )
}