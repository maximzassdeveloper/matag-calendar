import { FC, memo } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CustomCalendar } from '@/components/generetic'
import { eventApi } from '@/store/api/event.api'
import { getCalendar } from '@/store/selectors'
import { useActions } from '@/hooks/useActions'
import styles from './main-calendar.module.less'

export const MainCalendar: FC = memo(() => {

	const { calendarDate } = useTypedSelector(getCalendar)
	const { data: events } = eventApi.useGetEventsQuery({ catsFilter: true })
	const { openEventCreateModal, openDayModal } = useActions()

	const cellClick = (date: Date) => {
		openEventCreateModal(date)
	}

	const cellDayClick = (date: Date) => {
		openDayModal(date)
	}

	return (
		<CustomCalendar
			events={events}
			curDate={calendarDate}
			styles={styles}
			onCellClick={cellClick}
			onCellDayClick={cellDayClick}
		/>
	)
})