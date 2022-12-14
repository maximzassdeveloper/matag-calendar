import { FC } from 'react'
import { IEvent } from '@/types/event.types'
import { useActions } from '@/hooks/useActions'
import s from './cell-event.module.less'

interface CellEventProps {
  event: IEvent
}

export const CellEvent: FC<CellEventProps> = ({ event }) => {

  const { openEventPreviewModal } = useActions()

  return <>
    <div
      className={s.cellEvent}
      style={{ background: event.category.color }}
      onClick={() => openEventPreviewModal(event)}
    >
      {event.name}
    </div>
  </>
}