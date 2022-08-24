import { FC } from 'react'
import { IEvent } from '@/types/event.types'
import { useActions } from '@/hooks/useActions'
import s from './cell-event.module.less'

interface CellEventProps {
  event: IEvent
}

export const CellEvent: FC<CellEventProps> = ({ event }) => {

  const { openEventModal, changeSelectedEvent, changeEventModalType } = useActions()

  const clickHandler = () => {
    openEventModal()
    changeSelectedEvent(event)
    changeEventModalType('preview')
  }

  return <>
    <div
      className={s.cellEvent}
      style={{ background: event.category.color }}
      onClick={clickHandler}
    >
      {event.name}
    </div>
  </>
}