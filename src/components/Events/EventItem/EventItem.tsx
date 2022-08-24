import { FC } from 'react'
import { IEvent } from '@/types/event.types'
import { localeFormat } from '@/utils/locale-date-fns'
import s from './event-item.module.less'
import classNames from 'classnames'

interface EventItemProps {
  className?: string
  event: IEvent
}

export const EventItem: FC<EventItemProps> = ({ event, className }) => {

  const { name, category, expiry, withoutTime } = event

  return (
    <div className={classNames(s.item, className)}>
      <span
        className={s.color}
        style={{ background: category.color }}
      />
      {name}
      {!withoutTime && <span className={s.time}>{localeFormat(expiry, 'HH:mm')}</span>}
    </div>
  )
}