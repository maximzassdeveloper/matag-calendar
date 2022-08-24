import { FC } from 'react'
import { Layout } from 'antd'

import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Content } from './Content'

import s from './layout.module.less'

export const Wrapper: FC = () => {
	return (
		<Layout>
			<Header />
			<Layout className={s.main}>
				<Sidebar />
				<Content />
			</Layout>
		</Layout>
	)
}
