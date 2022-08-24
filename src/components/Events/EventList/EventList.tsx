import { FC } from 'react'
import classNames from 'classnames'
import { IEvent } from '@/types/event.types'
import { EventItem } from '..'
import s from './event-list.module.less'

interface EventListProps {
  events: IEvent[]
  className?: string
}

export const EventList: FC<EventListProps> = ({ events, className }) => {
  return (
    <div className={classNames(s.list, className)}>
      {events.map(event => <EventItem key={event.id} event={event} />)}
    </div>
  )
}