import { FC } from 'react'
import { Modal, Tabs } from 'antd'
import { AuthForm } from './AuthForm'
import { useActions } from '@/hooks/useActions'
import s from './auth.module.less'

interface AuthWrapperProps {
	isVisible: boolean
	onCancel: () => void
}

export const AuthWrapper: FC<AuthWrapperProps> = ({ isVisible, onCancel }) => {
	const { TabPane } = Tabs
	const { register, login } = useActions()

	const loginHandler = (fields: any) => login(fields)
	const registerHandler = (fields: any) => register(fields)

	return (
		<Modal
			className={s.wrapper}
			footer={null}
			visible={isVisible}
			onCancel={onCancel}
		>
			<div>
				<Tabs type="card">
					<TabPane tab="Login" key={1}>
						<AuthForm title="Login" onSubmit={loginHandler} />
					</TabPane>
					<TabPane tab="Register" key={2}>
						<AuthForm title="Register" onSubmit={registerHandler} />
					</TabPane>
				</Tabs>
			</div>
		</Modal>
	)
}
