import { FC } from 'react'
import { Layout } from 'antd'
import { MiniCalendar } from '@/components/MiniCalendar/MiniCalendar'
import { SidebarCollapse } from './SidebarCollapse'
import s from './sidebar.module.less'

export const Sidebar: FC = () => {
	return (
		<Layout.Sider className={s.sidebar} width={300}>
			<MiniCalendar />
			<SidebarCollapse />
		</Layout.Sider>
	)
}
