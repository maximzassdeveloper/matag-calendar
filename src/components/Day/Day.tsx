import { FC, memo, useMemo } from 'react'
import { CustomModal } from '@/components/generetic'
import { EventList, EventListDnD } from '@/components/Events'
import { AddEvent } from './AddEvent'
import { localeFormat } from '@/utils/locale-date-fns'
import { getCalendar } from '@/store/selectors'
import { eventApi } from '@/store/api/event.api'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import s from './day.module.less'

const convertData = (data: Date) => {
  return localeFormat(data, 'yyyy-MM-dd')
}

export const Day: FC = memo(() => {

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
      {!!eventsWithoutTime.length && (
        <div className={s.listWrapper}>
          <EventListDnD
            className={s.list}
            events={eventsWithoutTime}
          />
          <h3>Весь день</h3>
        </div>
      )}
      {!!eventsWithTime.length && (
        <div className={s.listWrapper}>
          <EventList
            className={s.list}
            events={eventsWithTime}
          />
          <h3>Расписание</h3>
        </div>
      )}
      <AddEvent date={selectedDate} />
    </CustomModal>
  )
})