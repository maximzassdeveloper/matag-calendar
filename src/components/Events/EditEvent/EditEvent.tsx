import { FC } from 'react'
import { eventApi } from '@/store/api/event.api'
import { IEvent } from '@/types/event.types'
import { useActions } from '@/hooks/useActions'
import { EventForm } from './EventForm'

interface EditEventProps {
  event?: IEvent
}

export const EditEvent: FC<EditEventProps> = ({ event }) => {

  const [createEvent] = eventApi.useCreateEventMutation()
  const [updateEvent] = eventApi.useUpdateEventMutation()
  const { closeEventModal } = useActions()

  const submitHandler = async (data: any) => {

    if (event) {
      const resp: any = await updateEvent({ ...data, id: event.id })
      if (resp.error) return
    } else {
      const resp: any = await createEvent(data)
      if (resp.error) return
    }

    closeEventModal()
  }

  return (
    <EventForm
      event={event}
      onSubmit={submitHandler}
    />
  )
}