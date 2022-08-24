import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'

import { Rows } from './Rows/Rows'
import { combineStyles } from '@/utils/combineStyles'
import { weekDays } from './calendar.helper'
import { IEvent } from '@/types/event.types'

import ownStyles from './calendar.module.less'

interface CustomCalendarProps {
  curDate: Date
  styles?: any
  events?: IEvent[]
  onCellDayClick?: (date: Date) => void
  onCellClick?: (date: Date) => void
}

export const CustomCalendar: FC<CustomCalendarProps> = memo(({
  curDate, styles, events, onCellDayClick, onCellClick
}) => {

  const s = useMemo(() => combineStyles(ownStyles, styles), [ownStyles, styles])

  const [isAnimating, setIsAnimating] = useState(false)
  const animTimeout = useRef<NodeJS.Timeout>()
  const prevDate = useRef<Date>(curDate)

  // Animation logic
  useEffect(() => {
    clearTimeout(animTimeout.current)
    setIsAnimating(true)

    animTimeout.current = setTimeout(() => {
      prevDate.current = curDate
      setIsAnimating(false)
    }, 200)
  }, [curDate])

  return (
    <div className={classNames(s.calendar, {
      [s.animatingNext]: (prevDate.current > curDate) && isAnimating,
      [s.animatingPrev]: (prevDate.current < curDate) && isAnimating
    })}>

      <div className={s.weekDays}>
        {weekDays.map(day => <span key={day}>{day}</span>)}
      </div>

      <Rows
        curDate={curDate}
        events={events}
        styles={styles}
        onCellDayClick={onCellDayClick}
        onCellClick={onCellClick}
      />
    </div>
  )
})