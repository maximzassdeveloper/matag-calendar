import { FC } from 'react'
import { IEvent } from '@/types/event.types'
import { localeFormat } from '@/utils/locale-date-fns'
import { eventApi } from '@/store/api/event.api'
import { useActions } from '@/hooks/useActions'
import s from './preview.module.less'

interface EventPreviewProps {
  event: IEvent
}

export const EventPreview: FC<EventPreviewProps> = ({ event }) => {

  const [deleteEvent] = eventApi.useDeleteEventMutation()
  const { closeEventModal, changeEventModalType } = useActions()

  const deleteHandler = () => {
    deleteEvent(event.id)
    closeEventModal()
  }

  const changeHandler = () => {
    changeEventModalType('edit')
  }

  return (
    <div>
      <div className={s.actions}>
        <span onClick={changeHandler}>
          <i className='ph-pencil-simple-bold' />
        </span>
        <span onClick={deleteHandler}>
          <i className='ph-trash-bold' />
        </span>
      </div>

      <h3 className={s.name}>{event.name}</h3>
      <div className={s.date}>
        <span>{localeFormat(event.expiry, 'eeee, d MMMM')}</span>
        <span>{localeFormat(event.expiry, 'HH:mm')}</span>
      </div>

      {event.description && <p className={s.desc}>{event.description}</p>}

      <div className={s.category}>
        <span style={{ background: event.category.color }} />
        {event.category.name}
      </div>
    </div>
  )
}