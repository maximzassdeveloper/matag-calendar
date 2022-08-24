import { FC } from 'react'
import { Layout } from 'antd'
import { EventModal } from '../Events/EventModal'
import { MainCalendar } from '../MainCalendar/MainCalendar'
import s from './layout.module.less'
import { Day } from '../Day/Day'

export const Content: FC = () => {
	return (
		<Layout.Content className={s.content}>
			<Day />
			<EventModal />
			<MainCalendar />
		</Layout.Content>
	)
}
