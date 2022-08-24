import { FC } from 'react'
import { Layout } from 'antd'
import { EventModal } from '../Events/EventModal'
import { MainCalendar } from '../MainCalendar/MainCalendar'
import { Day } from '../Day/Day'
import s from './layout.module.less'

export const Content: FC = () => {
	return (
		<Layout.Content className={s.content}>
			<Day />
			<EventModal />
			<MainCalendar />
		</Layout.Content>
	)
}
