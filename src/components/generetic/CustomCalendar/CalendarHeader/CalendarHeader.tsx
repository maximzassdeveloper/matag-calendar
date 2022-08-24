import { FC, useMemo } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import { add, format } from 'date-fns'
import { ru } from 'date-fns/esm/locale'

import { combineStyles } from '@/utils/combineStyles'
import ownStyles from './calendar-header.module.less'


interface CalendarHeaderProps {
  date: Date
  className?: string
  styles?: any
  onChange?: (date: Date) => void
}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  date, className, styles, onChange
}) => {

  const s = useMemo(() => combineStyles(ownStyles, styles), [ownStyles, styles])

  const renderDate = () => {
    return _.upperFirst(format(date, 'LLLL y', { locale: ru }))
  }

  const changeMonthHandler = (next: boolean) => {
    onChange?.(add(date, { months: next ? 1 : -1 }))
  }

  return (
    <div className={classNames(s.header, className)}>
      <div className={s.arrows}>
        <div onClick={() => changeMonthHandler(false)} className={s.arrow}>
          <i className='ph-caret-left-bold' />
        </div>
        <div onClick={() => changeMonthHandler(true)} className={s.arrow}>
          <i className='ph-caret-right-bold' />
        </div>
      </div>
      <span className={s.date}>
        {renderDate()}
      </span>
    </div>
  )
}