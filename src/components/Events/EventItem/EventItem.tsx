import { FC } from 'react'
import classNames from 'classnames'
import { ActionsPopover } from '@/components/generetic'
import { IEvent } from '@/types/event.types'
import { localeFormat } from '@/utils/locale-date-fns'
import { useActions } from '@/hooks/useActions'
import { useDeleteEventMutation } from '@/store/api/event.api'
import s from './event-item.module.less'

interface EventItemProps {
  className?: string
  event: IEvent
}

export const EventItem: FC<EventItemProps> = ({ event, className }) => {

  const { id, name, category, expiry, withoutTime } = event

  const [deleteEvent] = useDeleteEventMutation()
  const { openEventEditModal, openEventPreviewModal } = useActions()

  const clickHandler = () => {
    openEventPreviewModal(event)
  }

  const updateHandler = () => {
    openEventEditModal(event)
  }

  const deleteHandler = () => {
    deleteEvent(id)
  }

  return (
    <div className={classNames(s.item, className)}>
      <div className={s.itemArea} onClick={clickHandler}>
        <span
          className={s.color}
          style={{ background: category.color }}
        />
        {name}
        {!withoutTime && <span className={s.time}>{localeFormat(expiry, 'HH:mm')}</span>}
      </div>

      <ActionsPopover
        iconClassName={!withoutTime && s.actionsIcon}
        onDelete={deleteHandler}
        onUpdate={updateHandler}
      />
    </div>
  )
}