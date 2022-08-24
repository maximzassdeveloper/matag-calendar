import { FC, useMemo } from 'react'
import classNames from 'classnames'

import { CellEvent } from '@/components/Events'
import { combineStyles } from '@/utils/combineStyles'
import { twoDaysEqual } from '../calendar.helper'
import { IEvent } from '@/types/event.types'

import ownStyles from './cell.module.less'

interface CellProps {
  date: Date
  curMonth: number
  events?: IEvent[]
  styles?: any
  onDayClick?: (date: Date) => void
  onClick?: (date: Date) => void
}

export const Cell: FC<CellProps> = ({ date, curMonth, styles, events, onDayClick, onClick }) => {

  const s = useMemo(() => combineStyles(ownStyles, styles), [ownStyles, styles])

  const classes = classNames(s.cell, {
    [s.today]: twoDaysEqual(date, new Date()),
    [s.notCurMonth]: curMonth !== date.getMonth(),
    [s.hasEvents]: !!events
  })

  return (
    <div className={classes}>
      <span className={s.day} onClick={() => onDayClick?.(date)}>{date.getDate()}</span>
      <div className={s.createEventPlace} onClick={() => onClick?.(date)} />

      {!!events?.length && <div className={s.events}>
        {events.map(event =>
          <CellEvent key={event.id} event={event} />
        )}
      </div>}
    </div>
  )
}
