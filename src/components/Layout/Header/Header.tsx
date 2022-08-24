import { FC } from 'react'
import { Layout, Typography } from 'antd'

import { CalendarHeader } from '@/components/generetic'
import { HeaderUser } from './HeaderUser'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import { getCalendar } from '@/store/selectors'
import s from './header.module.less'

export const Header: FC = () => {

	const { calendarDate } = useTypedSelector(getCalendar)
	const { changeCalendarDate } = useActions()

	return (
		<Layout.Header className={s.header}>
			<Typography.Title level={4}>Todo Place</Typography.Title>
			<CalendarHeader date={calendarDate} onChange={changeCalendarDate} />
			<HeaderUser />
		</Layout.Header>
	)
}
