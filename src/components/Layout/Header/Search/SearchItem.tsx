import { useActions } from '@/hooks/useActions'
import { IEvent } from '@/types/event.types'
import { FC } from 'react'
import s from './search.module.less'

interface SearchItemProps {
  event: IEvent
}

export const SearchItem: FC<SearchItemProps> = ({ event }) => {

  const { openEventPreviewModal } = useActions()

  return (
    <div
      className={s.item}
      style={{ background: event.category.color }}
      onClick={() => openEventPreviewModal(event)}
    >
      {event.name}
    </div>
  )
}