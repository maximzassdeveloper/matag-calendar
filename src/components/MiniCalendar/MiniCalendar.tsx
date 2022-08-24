import { FC, useEffect, useState } from 'react'
import { CalendarHeader, CustomCalendar } from '@/components/generetic'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getCalendar } from '@/store/selectors'
import styles from './mini-calendar.module.less'

export const MiniCalendar: FC = () => {

  const { calendarDate } = useTypedSelector(getCalendar)
  const [date, setDate] = useState(calendarDate)

  useEffect(() => {
    setDate(calendarDate)
  }, [calendarDate])

  return (
    <div className={styles.miniCalendar}>
      <CalendarHeader
        date={date}
        onChange={d => setDate(d)}
        styles={styles}
      />
      <CustomCalendar
        curDate={date}
        styles={styles}
      />
    </div>
  )
}