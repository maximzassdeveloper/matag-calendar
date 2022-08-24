import { FC, useMemo } from 'react'
import { CustomModal } from '@/components/generetic'
import { EventList, EventListDnD } from '@/components/Events'
import { localeFormat } from '@/utils/locale-date-fns'
import { getCalendar } from '@/store/selectors'
import { eventApi } from '@/store/api/event.api'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import s from './day.module.less'

const convertData = (data: Date) => {
  return localeFormat(data, 'yyyy-MM-dd')
}

export const Day: FC = () => {

  const { isDayModalVisible, selectedDate } = useTypedSelector(getCalendar)
  const { closeDayModal } = useActions()
  const { data: events } = eventApi.useGetEventsQuery({ date: convertData(selectedDate) })

  const eventsWithTime = useMemo(() => {
    return events?.filter(i => !i.withoutTime) ?? []
  }, [events])

  const eventsWithoutTime = useMemo(() => {
    return events?.filter(i => i.withoutTime) ?? []
  }, [events])

  return (
    <CustomModal
      className={s.day}
      title={localeFormat(selectedDate, 'eeee, d MMMM')}
      visible={isDayModalVisible}
      onCancel={closeDayModal}
    >
      {!!eventsWithoutTime.length && <EventListDnD
        className={s.eventsWithoutTime}
        events={eventsWithoutTime}
      />}
      {!!eventsWithTime.length && <EventList
        events={eventsWithTime}
      />}
    </CustomModal>
  )
}