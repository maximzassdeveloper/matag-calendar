import { FC, memo, useState } from 'react'
import { Popover, Avatar } from 'antd'
import { AuthWrapper } from '@/components/Auth/AuthWrapper'
import { HeaderUserMenu } from './HeaderUserMenu'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getUser } from '@/store/selectors'
import s from './user.module.less'

export const HeaderUser: FC = memo(() => {
	const { user, isAuth } = useTypedSelector(getUser)
	const [isAuthVisible, setIsAuthVisible] = useState(false)

	return (
		<>
			<Popover
				overlayClassName={s.userPopover}
				trigger="click"
				placement="bottomRight"
				content={
					<HeaderUserMenu
						isAuth={isAuth}
						onLogin={() => setIsAuthVisible(true)}
					/>
				}
			>
				<div className={s.user}>
					<Avatar className={s.avatar}>
						{isAuth ? user?.username[0].toUpperCase() : '?'}
					</Avatar>
				</div>
			</Popover>

			<AuthWrapper
				isVisible={isAuthVisible}
				onCancel={() => setIsAuthVisible(false)}
			/>
		</>
	)
})
