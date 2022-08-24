import { FC, PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { getUser } from '@/store/selectors'
import { useActions } from '@/hooks/useActions'
import { getTokenLocal } from '@/services/authService'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Wrapper } from './Layout/Layout'
import { AuthWrapper } from './Auth/AuthWrapper'
import ruRU from 'antd/es/locale/ru_RU'
import { ConfigProvider } from 'antd'

if (ruRU.DatePicker?.lang) {
	ruRU.DatePicker.lang = { ...ruRU.DatePicker.lang, locale: 'ru' }
}


export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<ConfigProvider locale={ruRU}>
				{children}
			</ConfigProvider>
		</Provider>
	)
}

export const AuthRefreshComponent = () => {
	const { refresh } = useActions()
	const { isAuth } = useTypedSelector(getUser)

	useEffect(() => {
		const token = getTokenLocal()
		if (token) {
			refresh()
		}
	}, [])

	return <>
		{isAuth ? <Wrapper /> : <AuthWrapper isVisible onCancel={() => null} />}
	</>
}