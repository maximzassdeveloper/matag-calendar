import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import s from './header.module.less'

interface HeaderUserMenuProps {
	isAuth: boolean
	onLogin: () => void
}

export const HeaderUserMenu: FC<HeaderUserMenuProps> = ({
	isAuth,
	onLogin,
}) => {
	const { logout } = useActions()

	const authHandler = () => {
		isAuth ? logout() : onLogin()
	}

	return (
		<div className={s.userMenu}>
			<span className={s.userMenuItem} onClick={authHandler}>
				{isAuth ? 'Logout' : 'Login'}
			</span>
		</div>
	)
}
